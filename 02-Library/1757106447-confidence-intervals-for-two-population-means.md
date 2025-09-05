---
link: "[[1756144012-business-intelligence-analyst-udemy-course-2025|Business Intelligence Analyst Udemy Course 2025]]"
aliases: 
  - "Confidence Intervals for Two Population Means"
tags:
  - Knowledge
  - math
  - statistics
  - confidence_intervals
created_date:
  "2025-09-05"
---
# Confidence Intervals for Two Population Means

### 6.1 General Distinctions for Two Populations
- **Importance**: Cases involving two populations are highly relevant due to their wide range of real-world applications [74]
- **Sample Types**:
  - **Dependent Samples**: Observations from two populations are linked or related [75]
  - **Independent Samples**: Observations from two populations are unrelated [75]

### 6.2 Dependent Samples
- **Characteristics**:
  - Occur when researching the **same subject over time** (e.g., "before and after" measurements like weight loss or blood samples from the same person) [75, 76]
  - When investigating **related groups** (e.g., couples, families) [77]
  - When the **same people** are involved in **different, but related, situations** (e.g., SAT scores and university admission outcomes for the same applicant) [77, 78]
- **Methodology**: Dependent samples are often handled by calculating the **difference between the paired observations**, effectively reducing the problem to a single population of differences [79]
- **Test Statistic**: For dependent samples, the formula often resembles that of a single population with unknown variance, typically employing the **T-statistic** if the population of differences is assumed normal but sample size is small [67]
- **Example (Magnesium Levels)**: Measuring magnesium levels in the same 10 people before and after taking a pill. The differences in levels are treated as a single population. A 95% confidence interval using a T-statistic (with 9 degrees of freedom) was calculated to determine the drug's effectiveness [67, 76, 79, 80]

### 6.3 Independent Samples
- **Characteristics**: Observations in one sample do not affect observations in the other (e.g., grades from different university departments) [75, 81]. Different sample sizes are common [82]
- **Sub-cases**:
  - **Known Population Variances** [83]
  - **Unknown Population Variances, Assumed Equal** [84, 85]
  - **Unknown Population Variances, Assumed Different** [84, 86]. (This case is complex and generally only the formula's existence is noted without deep dives [86, 87])

#### 6.3.1 Independent Samples with Known Variances
- **Assumptions**: Populations are normally distributed, population variances ($\sigma_X^2, \sigma_Y^2$) are known [63, 82]
- **Test Statistic**: **Z-statistic** (due to known population variances and large samples) [63]
- **Variance of the Difference between Two Means**: Dispersion is additive [88]
  $$ \sigma^2_{(\bar{X} - \bar{Y})} = \frac{\sigma_X^2}{N_X} + \frac{\sigma_Y^2}{N_Y} $$ [88]
- **Confidence Interval Formula**:
  $$ (\bar{X} - \bar{Y}) \pm Z_{\alpha/2} \sqrt{\frac{\sigma_X^2}{N_X} + \frac{\sigma_Y^2}{N_Y}} $$ [88]
  Where:
  - $\bar{X}$ and $\bar{Y}$ are the sample means of the two populations [88]
  - $N_X$ and $N_Y$ are the respective sample sizes [88]
  - $\sigma_X^2$ and $\sigma_Y^2$ are the known population variances [88]
- **Example (University Grades)**: Comparing grades of engineering (N=100, $\bar{X}=58\%$, $\sigma=10\%$) and management (N=70, $\bar{Y}=65\%$, $\sigma=5\%$) students. A 95% CI for the difference was calculated using the Z-statistic [82, 89, 90]. A negative interval indicated engineering grades were consistently lower [90]

#### 6.3.2 Independent Samples with Unknown but Equal Variances
- **Assumptions**: Populations are normally distributed, population variances are unknown but assumed to be equal [85, 91]
- **Estimator**: The **pooled sample variance ($S_p^2$)** is used as an unbiased estimator for the common unknown population variance [92]
  $$ S_p^2 = \frac{(N_1 - 1)S_1^2 + (N_2 - 1)S_2^2}{N_1 + N_2 - 2} $$ [92]
  Where:
  - $N_1, N_2$ are sample sizes [92]
  - $S_1^2, S_2^2$ are sample variances [92]
- **Test Statistic**: **T-statistic** (due to unknown variances) [93]
- **Degrees of Freedom (df)**: $N_1 + N_2 - 2$ (total sample size minus the number of variables, which is two) [94]
- **Confidence Interval Formula**:
  $$ (\bar{X} - \bar{Y}) \pm T_{\alpha/2, df} S_p \sqrt{\frac{1}{N_1} + \frac{1}{N_2}} $$ [93]
- **Example (Apple Prices)**: Comparing apple prices in New York (N=10, $\bar{X}=\$3.94$, $S=0.18$) and LA (N=8, $\bar{Y}=\$3.25$, $S=0.27$), assuming equal but unknown variances. The pooled variance was calculated, and a 95% CI for the difference was found using the T-statistic (16 degrees of freedom) [85, 91, 92, 94, 95]. The positive interval indicated apples were more expensive in New York [95]

#### 6.3.3 Independent Samples with Unknown and Different Variances
- **Concept**: This scenario involves comparing two independent sample means when variances are unknown and assumed to be different [86]
- **Complexity**: This case requires estimating degrees of freedom using a complex formula developed by statisticians [96]
- **Note**: The course does not delve deep into this specific formula, only acknowledging its existence [86, 87]. It is likened to "comparing apples and oranges" in statistics [86, 96]