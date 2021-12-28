import 'package:analyzer/dart/ast/ast.dart';
import 'package:analyzer/dart/ast/token.dart';
import 'package:analyzer/dart/ast/visitor.dart';

import '../../../../../../lint_analyzer.dart';
import '../../../../../utils/node_utils.dart';
import '../../../lint_utils.dart';
import '../../../models/internal_resolved_unit_result.dart';
import '../../models/common_rule.dart';
import '../../rule_utils.dart';
import 'models/comment_info.dart';

part 'visitor.dart';

class FormatCommentRule extends CommonRule {
  static const String ruleId = 'format-comment';

  static const _warning = 'Prefer format comments like sentences';

  FormatCommentRule([Map<String, Object> config = const {}])
      : super(
          id: ruleId,
          severity: readSeverity(config, Severity.style),
          excludes: readExcludes(config),
        );

  @override
  Iterable<Issue> check(InternalResolvedUnitResult source) {
    final visitor = _Visitor();

    source.unit.visitChildren(visitor);

    visitor.visitComments(source.unit.root);

    return [
      for (final declaration in visitor.comments)
        createIssue(
          rule: this,
          location: nodeLocation(
            node: declaration.token,
            source: source,
          ),
          message: _warning,
          replacement: _createReplacement(declaration),
        ),
    ];
  }

  Replacement _createReplacement(CommentInfo commentType) {
    final comment = commentType.token.toString();
    var resultString = comment;

    switch (commentType.type) {
      case '//':
        final subString = formatComment(comment.substring(2, comment.length));
        resultString = '// $subString';
        break;
      case '///':
        final subString = formatComment(comment.substring(3, comment.length));
        resultString = '/// $subString';
        break;
      case '/*':
        final subString =
            formatComment(comment.substring(2, comment.length - 2));
        resultString = '/* $subString*/';
    }

    return Replacement(
      comment: 'Format comments like sentences',
      replacement: resultString,
    );
  }

  String formatComment(String res) => res.trim().capitalize().replaceEnd();
}

const _punctuation = ['.', '!', '?'];

extension _StringExtension on String {
  String capitalize() => '${this[0].toUpperCase()}${substring(1)}';

  String replaceEnd() =>
      !_punctuation.contains(this[length - 1]) ? '$this.' : this;
}
