---
link: "[[1756144012-business-intelligence-analyst-udemy-course-2025|Business Intelligence Analyst Udemy Course 2025]]"
aliases:
  - Measures of Variability
tags:
  - resource
  - math
  - statistics
  - descriptive_statistics
  - variance
  - standard_deviation
  - coefficient_of_variation
created_date: 2025-09-03
---
# Measures of Variability
- These measures quantify the dispersion or spread of data points [46]. Different formulas are used for population vs. sample data [46, 47].
- **Variance**:
    - Measures the **dispersion of data points around their mean value** [48].
    - **Population Variance ($\sigma^2$)**:
        $$ \sigma^2 = \frac{\sum (x_i - \mu)^2}{N} $$
        - Where $x_i$ is each observation, $\mu$ is the population mean, and $N$ is the total number of observations [48, 49].
    - **Sample Variance ($s^2$)**:
        $$ s^2 = \frac{\sum (x_i - \bar{X})^2}{n-1} $$
        - Where $x_i$ is each sample observation, $\bar{X}$ is the sample mean, and $n$ is the number of sample observations [49].
        - The denominator $(n-1)$ is used to provide a less biased estimate of the population variance, as sample variance tends to underestimate population variance [50, 51].
    - **Why square differences?**
        1.  Ensures **non-negative computation**: Dispersion (distance) cannot be negative [52, 53]. Squaring prevents positive and negative differences from canceling each other out, which would obscure actual dispersion [53].
        2.  **Amplifies the effect of large differences**: Outliers or values far from the mean have a greater impact on the variance [53].
    - **Unit**: Variance results in squared units, which can be difficult to interpret (e.g., "squared dollars") [54, 55].
- **Standard Deviation**:
    - The **square root of variance** [54, 56].
    - **Advantage**: Much more meaningful and directly interpretable than variance because it uses the **original units of measurement** [54, 55].
    - **Population Standard Deviation ($\sigma$)**: $\sigma = \sqrt{\sigma^2} = \sqrt{\frac{\sum (x_i - \mu)^2}{N}}$ [56].
    - **Sample Standard Deviation ($s$)**: $s = \sqrt{s^2} = \sqrt{\frac{\sum (x_i - \bar{X})^2}{n-1}}$ [56].
- **Coefficient of Variation (Relative Standard Deviation)**:
    - Calculated as the **standard deviation divided by the mean** [56, 57].
    - **Population CV**: $CV = \frac{\sigma}{\mu}$ [57].
    - **Sample CV**: $CV = \frac{s}{\bar{X}}$ [57].
    - **Advantage**: Allows for **meaningful comparison of variability between two different data sets** that may have different scales or units, as the result is unitless [57-59]. Comparing standard deviations directly between different datasets is often meaningless [57, 58].
