---
link: "[[1756144012-business-intelligence-analyst-udemy-course-2025|Business Intelligence Analyst Udemy Course 2025]]"
aliases: 
  - "Confidence Intervals General Concepts"
tags:
  - Knowledge
  - math
  - statistics
  - confidence_intervals
created_date:
  "2025-09-05"
---
# Confidence Intervals General Concepts

### 4.1 Definition & Purpose
- A **confidence interval (CI)** is a range within which the population parameter (e.g., population mean) is expected to lie, based on sample data [5, 41]
- It provides a more accurate representation of reality than a single point estimate [6]

### 4.2 Confidence Level ($\mathbf{1 - \alpha}$)
- **Definition**: The measure of certainty that the population parameter falls within the calculated confidence interval [6, 42]
- **Notation**: Denoted by $1 - \alpha$, where $\alpha$ (alpha) is a value between zero and one [42]
  - For a **95% confidence level**, $\alpha = 0.05$ (or 5%) [42]
  - For a **99% confidence level**, $\alpha = 0.01$ (or 1%) [42]
- **Interpretation**: A 95% confidence interval means that in 95% of cases, the true population parameter will fall within that interval [43, 44]. Conversely, there is a $\alpha$ (e.g., 5%) chance that the actual population parameter falls outside the interval [6, 44]. This $\alpha$ chance is split between the two tails of the distribution, so there's $\alpha/2$ chance on each side (e.g., 2.5% on the left, 2.5% on the right for a 95% CI) [44, 45]
- **Limitation**: You can never be 100% confident unless you survey the entire population [6]

### 4.3 General Formula for Confidence Intervals
- All confidence intervals follow a general structure:
  $$ \text{Point Estimate} \pm \text{Reliability Factor} \times \text{Standard Error} $$ [46, 47]

### 4.4 Margin of Error
- **Definition**: The part of the confidence interval formula that determines its span; it is the "Reliability Factor $\times$ Standard Error" part [47, 48]
- **Formulas**:
  - When population variance is **known**: $Z_{\alpha/2} \frac{\sigma}{\sqrt{N}}$ [47]
  - When population variance is **unknown**: $T_{\alpha/2, df} \frac{S}{\sqrt{N}}$ [47]
- **Control over Margin of Error**:
  - **Reliability Factor (Statistic)**: A **higher confidence level** requires a higher Z or T statistic, which **increases the margin of error** and results in a wider confidence interval [49-51]
  - **Standard Deviation**: A **lower standard deviation** (less data dispersion) leads to a **smaller margin of error** and a narrower confidence interval [49, 52]
  - **Sample Size ($N$)**: A **higher sample size** (in the denominator) **decreases the margin of error** and results in a narrower confidence interval, as more observations lead to better predictions [49, 53, 54]

### 4.5 Trade-offs
- There is an inherent **trade-off between the level of confidence and the precision (narrowness) of the interval** [55-57]
  - A **higher confidence level** (e.g., 99%) yields a **wider interval** (less precise) [55, 58, 59]
  - A **lower confidence level** (e.g., 90%) yields a **narrower interval** (more precise but with higher uncertainty) [55, 59]
- A 100% confidence interval is typically too wide to be insightful, as it must encompass all possible values [56]
- A point estimate (very narrow) has a very low confidence level, making it statistically meaningless for inference [57]
- The **95% confidence level** is commonly accepted as a good balance between accuracy and interval width [57]
