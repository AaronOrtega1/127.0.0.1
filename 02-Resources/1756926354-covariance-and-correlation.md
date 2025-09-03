---
link: "[[1756144012-business-intelligence-analyst-udemy-course-2025|Business Intelligence Analyst Udemy Course 2025]]"
aliases:
  - Covariance and Correlation
tags:
  - resource
  - math
  - statistics
  - descriptive_statistics
  - covariance
  - correlation
created_date: 2025-09-03
---
# Covariance and Correlation
- Measures used to explore the **relationship between two variables** [60].
- **Covariance**:
    - The main statistic to measure correlation between two variables [61].
    - Can be **positive, negative, or zero** [61].
        - **Positive covariance**: Variables move in the **same direction** (e.g., house size and price) [62, 63].
        - **Negative covariance**: Variables move in **opposite directions** [63].
        - **Zero covariance**: Movements of variables are **independent** [63].
    - **Calculation (Sample Covariance)**:
        1.  Calculate the mean for both variables ($X$ and $Y$) [64].
        2.  For each data point, multiply the difference between $X_i$ and its mean $(\bar{X})$ by the difference between $Y_i$ and its mean $(\bar{Y})$ [62, 64].
        3.  Sum these products [62].
        4.  Divide the sum by $(n-1)$ (sample size minus one) [62].
        $$ \text{Sample Covariance} = \frac{\sum (X_i - \bar{X})(Y_i - \bar{Y})}{n-1} $$
    - **Problem**: The value of covariance can be on a completely different scale (e.g., 5, 50, or over 30 million), making it difficult to interpret or compare [63].
- **Correlation Coefficient**:
    - **Adjusts covariance** to make the relationship between two variables easy and intuitive to interpret [65, 66].
    - **Formula**: Covariance divided by the product of the standard deviations of the two variables [66].
    $$ r = \frac{\text{Covariance}(X,Y)}{s_X s_Y} $$
    - **Range**: Always between **-1 and +1** [67].
    - **Interpretation**:
        - **+1 (Perfect Positive Correlation)**: The entire variability of one variable is explained by the other, and they move perfectly in the same direction [67, 68].
        - **Close to +1 (Strong Positive Correlation)**: Strong relationship where variables generally move in the same direction (e.g., 0.87 for house size and price) [67, 68].
        - **0 (No Correlation)**: Variables are absolutely independent of each other [68, 69].
        - **Close to -1 (Strong Negative Correlation)**: Variables generally move in opposite directions (e.g., ice cream sales and umbrella sales) [69, 70].
        - **-1 (Perfect Negative Correlation)**: Variables move perfectly in opposite directions [69].
    - **Symmetry**: The correlation between $X$ and $Y$ is the same as between $Y$ and $X$ [70].
    - **Correlation does not imply causation**: It is critical for analysts to understand that correlation only indicates a relationship, not necessarily that one variable causes the other (e.g., house size causes price, not vice versa) [71]. *Self-contained detail (not from sources): Causation requires further investigation through experimental design or advanced statistical modeling like regression analysis.*
