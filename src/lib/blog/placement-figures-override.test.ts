import { describe, expect, it } from 'vitest';
import {
  PLACEMENT_FIGURE_SLUGS,
  SENTENCE_RULES,
  dropPayColumns,
  withoutPlacementFigures,
} from './placement-figures-override';

// Shapes exactly as the MyJKKN public API served them on 2026-11-24.
const SALARY_TABLE =
  '<table style="min-width:75px"><colgroup><col style="min-width:25px" /><col style="min-width:25px" /><col style="min-width:25px" /></colgroup><tbody>' +
  '<tr><th colspan="1" rowspan="1"><p><strong>Role</strong></p></th><th colspan="1" rowspan="1"><p><strong>Entry Salary (₹/yr)</strong></p></th><th colspan="1" rowspan="1"><p><strong>Top Recruiters</strong></p></th></tr>' +
  '<tr><td colspan="1" rowspan="1"><p>Software Developer</p></td><td colspan="1" rowspan="1"><p>3.0 – 5.5 LPA</p></td><td colspan="1" rowspan="1"><p>TCS, Infosys</p></td></tr>' +
  '</tbody></table>';

const SLUG = 'bachelor-of-science-computer-science-course-details-fees-scope-jobs-2026';

describe('Arts blog placement figures (user choice 2026-11-24)', () => {
  it('drops the salary column and keeps role + recruiter columns', () => {
    expect(dropPayColumns(SALARY_TABLE)).toBe(
      '<table style="min-width:50px"><colgroup><col style="min-width:25px" /><col style="min-width:25px" /></colgroup><tbody>' +
        '<tr><th colspan="1" rowspan="1"><p><strong>Role</strong></p></th><th colspan="1" rowspan="1"><p><strong>Top Recruiters</strong></p></th></tr>' +
        '<tr><td colspan="1" rowspan="1"><p>Software Developer</p></td><td colspan="1" rowspan="1"><p>TCS, Infosys</p></td></tr>' +
        '</tbody></table>'
    );
  });

  it('leaves a table without a pay column, or with an uneven row, as it is', () => {
    const fees = SALARY_TABLE.replace('Entry Salary (₹/yr)', 'Annual Fee (₹)');
    expect(dropPayColumns(fees)).toBe(fees);
    const uneven = SALARY_TABLE.replace('<td colspan="1" rowspan="1"><p>TCS, Infosys</p></td>', '');
    expect(dropPayColumns(uneven)).toBe(uneven);
  });

  it('applies to the 38 listed posts only', () => {
    expect(PLACEMENT_FIGURE_SLUGS.size).toBe(38);
    expect(withoutPlacementFigures(SLUG, SALARY_TABLE)).not.toContain('LPA');
    expect(withoutPlacementFigures('some-other-post', SALARY_TABLE)).toBe(SALARY_TABLE);
    expect(withoutPlacementFigures(SLUG, '')).toBe('');
  });

  it('rewrites the listed sentences, and no rewrite carries an amount', () => {
    const [old, next] = SENTENCE_RULES[SLUG][0];
    expect(withoutPlacementFigures(SLUG, `<h2>x</h2>${old}`)).toBe(`<h2>x</h2>${next}`);
    for (const rules of Object.values(SENTENCE_RULES)) {
      for (const [, after] of rules) expect(after).not.toMatch(/LPA|lakhs? per annum|\d+\+ recruiters/);
    }
  });

  it('removes the section that quoted the 95% claim, up to the next heading', () => {
    const html =
      '<p>a</p><h2>What our own claim says, and what is wrong with it</h2><p>Our recorded placement claim is "95% placement"</p><h2>What a good answer sounds like</h2><p>b</p>';
    expect(withoutPlacementFigures('placements-at-an-arts-and-science-college-what-to-ask', html)).toBe(
      '<p>a</p><h2>What a good answer sounds like</h2><p>b</p>'
    );
  });
});
