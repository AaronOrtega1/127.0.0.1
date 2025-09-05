---
link: "[[1756144012-business-intelligence-analyst-udemy-course-2025|Business Intelligence Analyst Udemy Course 2025]]"
aliases: 
  - "Probability Distributions"
tags:
  - Knowledge
  - math
  - statistics
  - probability_distributions
created_date:
  "2025-09-05"
---
# Probability Distributions
### 2.1 What is a Distribution?
- **Definition**: A function that shows the possible values for a variable and how often they occur [10]
- **Visual Representation**: Often depicted as a graph, but the distribution is fundamentally defined by its underlying probabilities, not the graph itself [11, 12]
- **Types**: Includes discrete (e.g., uniform, binomial) and continuous (e.g., normal) distributions [10, 11, 13]

### 2.2 Normal Distribution (Gaussian Distribution / Bell Curve)
- **Significance**: The most common and widely used distribution in statistics, approximating a wide variety of random variables and sample means with large enough sample sizes [14-16]
- **Characteristics**:
  - **Symmetrical** and bell-shaped [16]
  - Its **mean, median, and mode are all equal** [16]. It has no skew [16]
  - Denoted as $N(\mu, \sigma^2)$, where $\mu$ is the mean and $\sigma^2$ is the variance [16]
  - The **highest point** of the curve is at the mean [17]
  - The **spread** is determined by its standard deviation ($\sigma$) [17]
- **Effect of Parameters**:
  - **Mean ($\mu$)**: Changing the mean shifts the entire curve left or right along the x-axis, without changing its shape [18, 19]
  - **Standard Deviation ($\sigma$)**:
    - A **lower standard deviation** results in lower dispersion, meaning data is more concentrated around the mean, leading to a taller, narrower curve with thinner tails [19]
    - A **higher standard deviation** results in higher dispersion, meaning data is more spread out, leading to a flatter, wider curve with fatter tails [19, 20]

### 2.3 Standardization & Z-Score
- **Standardization**: The process of transforming any variable into a new one with a mean of zero and a standard deviation of one [21]
- **Standard Normal Distribution**: A normal distribution that has been standardized [21]. It is denoted by the letter **Z** [22]
- **Z-score Formula**:
  $$ Z = \frac{X - \mu}{\sigma} $$
  Where:
  - $X$ is the original variable [22]
  - $\mu$ is the mean of the original variable [22]
  - $\sigma$ is the standard deviation of the original variable [22]
- **Process**: Subtracting the mean shifts the distribution to a mean of zero; dividing by the standard deviation reshapes it to a standard deviation of one [23, 24]
- **Purpose**: Standardizing makes predictions and inferences easier [25]

### 2.4 Student's t-Distribution
- **Origin**: Developed by William Gosset (under the pen name "Student") and later expanded upon by Ronald Fisher [26, 27]
- **Breakthrough**: It allowed for statistical inference using **small samples with an unknown population variance**, a common scenario in real-world problems [28]
- **Characteristics**:
  - Visually, it resembles a normal distribution but typically has **fatter tails** [28]. Fatter tails indicate higher dispersion and more uncertainty compared to a normal distribution [28]
  - It is directly related to the **t-statistic** [29]
  - It depends on **degrees of freedom (df)** [29]. For a single sample of size $N$, the degrees of freedom are $N-1$ [29, 30]
  - As the degrees of freedom increase (i.e., larger sample sizes), the t-distribution becomes increasingly similar to the standard normal (Z) distribution [30, 31]. A common rule of thumb is to use the Z-table instead of the t-table for samples with more than 50 observations [31]
