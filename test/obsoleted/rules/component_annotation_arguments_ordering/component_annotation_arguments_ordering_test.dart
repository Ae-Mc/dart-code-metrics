@TestOn('vm')
import 'package:dart_code_metrics/src/models/severity.dart';
import 'package:dart_code_metrics/src/obsoleted/rules/component_annotation_arguments_ordering.dart';
import 'package:test/test.dart';

import '../../../helpers/rule_test_helper.dart';

const _examplePath =
    'test/obsoleted/rules/component_annotation_arguments_ordering/examples/example.dart';

void main() {
  group('ComponentAnnotationArgumentsOrdering', () {
    test('initialization', () async {
      final unit = await RuleTestHelper.resolveFromFile(_examplePath);
      final issues = ComponentAnnotationArgumentsOrderingRule().check(unit);

      RuleTestHelper.verifyInitialization(
        issues: issues,
        ruleId: 'component-annotation-arguments-ordering',
        severity: Severity.style,
      );
    });

    test('with default config reports about found issues', () async {
      final unit = await RuleTestHelper.resolveFromFile(_examplePath);
      final issues = ComponentAnnotationArgumentsOrderingRule().check(unit);

      RuleTestHelper.verifyIssues(
        issues: issues,
        startOffsets: [126],
        startLines: [5],
        startColumns: [3],
        endOffsets: [139],
        locationTexts: ['styleUrls: []'],
        messages: ['Arguments group styles should be before change-detection'],
      );
    });

    test('with custom config reports no issues', () async {
      final unit = await RuleTestHelper.resolveFromFile(_examplePath);
      final config = {
        'order': [
          'selector',
          'templates',
        ],
      };

      final issues =
          ComponentAnnotationArgumentsOrderingRule(config: config).check(unit);

      RuleTestHelper.verifyNoIssues(issues);
    });

    test('with custom config reports about found issues', () async {
      final unit = await RuleTestHelper.resolveFromFile(_examplePath);
      final config = {
        'order': [
          'change-detection',
          'templates',
          'selector',
          'styles',
        ],
      };

      final issues =
          ComponentAnnotationArgumentsOrderingRule(config: config).check(unit);

      RuleTestHelper.verifyIssues(
        issues: issues,
        startOffsets: [48, 75],
        startLines: [3, 4],
        startColumns: [3, 3],
        endOffsets: [71, 122],
        locationTexts: [
          "template: '<div></div>'",
          'changeDetection: ChangeDetectionStrategy.OnPush',
        ],
        messages: [
          'Arguments group templates should be before selector',
          'Arguments group change-detection should be before templates',
        ],
      );
    });
  });
}