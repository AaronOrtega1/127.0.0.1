---
link: "[[1756144012-business-intelligence-analyst-udemy-course-2025|Business Intelligence Analyst Udemy Course 2025]]"
aliases:
  - Confidence Intervals for a Single Population Mean
tags:
  - Knowledge
  - math
  - statistics
  - confidence_intervals
created_date: 2025-09-05
---
# Confidence Intervals for a Single Population Mean

### 5.1 Population Mean with Known Variance
- **Assumptions**: Population is normally distributed, or a large sample size ($N \ge 30$) is used, allowing the Central Limit Theorem to ensure normality of sample means [60]
- **Test Statistic**: **Z-statistic** (used when population variance is known and/or sample size is large) [61-63]
- **Formula**:
  $$ \bar{X} \pm Z_{\alpha/2} \frac{\sigma}{\sqrt{N}} $$ [61]
  Where:
  - $\bar{X}$ is the sample mean (point estimate) [61]
  - $Z_{\alpha/2}$ is the Z-score corresponding to the desired confidence level (reliability factor or critical value) [62, 64]
  - $\frac{\sigma}{\sqrt{N}}$ is the standard error, using the known population standard deviation ($\sigma$) [39, 61]
- **Example (95% CI)**: For $\alpha = 0.05$, $\alpha/2 = 0.025$. The $Z_{\alpha/2}$ value from the standard normal distribution table is **1.96** [45, 64, 65]
- **Example (99% CI)**: For $\alpha = 0.01$, $\alpha/2 = 0.005$. The $Z_{\alpha/2}$ value (rounding from table) is **2.58** [58]

### 5.2 Population Mean with Unknown Variance
- **Assumptions**: Population is normally distributed, and the sample size is small [66, 67]
- **Test Statistic**: **T-statistic** (used when population variance is unknown) [68, 69]
- **Formula**:
  $$ \bar{X} \pm T_{\alpha/2, df} \frac{S}{\sqrt{N}} $$ [68]
  Where:
  - $\bar{X}$ is the sample mean [68]
  - $T_{\alpha/2, df}$ is the T-statistic from the Student's t-distribution table, corresponding to the desired confidence level and degrees of freedom [70, 71]
  - $\frac{S}{\sqrt{N}}$ is the standard error, using the **sample standard deviation ($S$)** as an estimate for the unknown population standard deviation [68, 72]
- **Degrees of Freedom (df)**: For a single sample, $df = N-1$ [70]
- **Comparison to Known Variance**: Using the t-statistic and sample standard deviation due to unknown population variance results in a **wider confidence interval** (reflecting higher uncertainty) compared to when the population variance is known [69, 73]