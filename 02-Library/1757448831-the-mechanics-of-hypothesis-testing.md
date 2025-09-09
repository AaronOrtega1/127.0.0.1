---
link: "[[1756144012-business-intelligence-analyst-udemy-course-2025|Business Intelligence Analyst Udemy Course 2025]]"
aliases: 
  - "The Mechanics of Hypothesis Testing"
tags:
  - Knowledge
  - math
  - statistics
  - hypothesis_testing
created_date:
  "2025-09-09"
---
# The Mechanics of Hypothesis Testing
Hypothesis testing involves standardizing a variable and comparing it to a critical value or evaluating its P-value [11, 12].

### 2.1 Significance Level ($\alpha$)

- **Definition**: The probability of **rejecting a true null hypothesis** (also known as a **Type I Error** or a false positive) [13-15].
    
- **Responsibility**: The researcher chooses the significance level, making them responsible for the risk of a Type I error [16].
    
- **Typical Values**: Common choices for $\alpha$ are 0.01 (1%), 0.05 (5%), and 0.1 (10%) [15].
    
- **Context Dependence**:
    
    - A **low significance level** (e.g., 0.01) is chosen when high precision is required, such as testing a machine where even small deviations are critical (e.g., Coca-Cola bottle filling machine) [15, 17].
        
    - A **higher significance level** (e.g., 0.05 or 0.1) may be chosen when analyzing human or company behavior, where more variability or uncertainty is expected [17, 18].
        
    - **0.05 is the most commonly used value** for $\alpha$ [15].
        

### 2.2 Test Statistics: Z-score and T-score

The choice of test statistic (Z or T) depends primarily on the sample size and whether the population variance is known [19-21].

- **Standardization**: The core idea is to scale the sample mean with respect to the hypothesized population mean ($\mu_0$) [12, 22].
    
    - If the sample mean is close to $\mu_0$, the test statistic will be close to zero, suggesting we cannot reject $H_0$ [12, 23].
        
    - If the sample mean is far from $\mu_0$, the test statistic will be far from zero, suggesting we reject $H_0$ [12, 23].
        

#### 2.2.1 Z-statistic (Z-score)

- **When to use**: Typically used when [21]:
    
    - The **population variance ($\sigma^2$) is known**.
        
    - The **sample size (n) is large** (generally $n \geq 30$).
        
    - If the sample size is large but population variance is unknown, it is generally acceptable to use the Z-test as well [24].
        
- **Formula for a single mean (known population standard deviation $\sigma$)** [25]:  
    Z=Xˉ−μ0SEZ=SEXˉ−μ0​​  
    Where:
    
    - $\bar{X}$ is the sample mean.
        
    - $\mu_0$ is the hypothesized population mean from the null hypothesis.
        
    - $SE$ is the standard error of the mean.
        
    - $SE = \frac{\sigma}{\sqrt{n}}$ (information from outside the given sources, commonly associated with Z-test when $\sigma$ is known).
        
- **Formula for independent samples (known population standard deviations $\sigma_1, \sigma_2$)** [24]:  
    Z=(Xˉ1−Xˉ2)−(μ1−μ2)SEdiffZ=SEdiff​(Xˉ1​−Xˉ2​)−(μ1​−μ2​)​  
    Where:
    
    - $\bar{X}_1, \bar{X}_2$ are the sample means of the two populations.
        
    - $(\mu_1 - \mu_2)$ is the hypothesized difference between population means (often 0).
        
    - $SE_{diff}$ is the standard error of the difference between means.
        
    - $SE_{diff} = \sqrt{\frac{\sigma_1^2}{n_1} + \frac{\sigma_2^2}{n_2}}$ (information from outside the given sources, but used for independent samples with known variances [21]).
        
- **Critical Value ($z_{critical}$)**: Value from the Z-table corresponding to the chosen significance level [25, 26].
    
    - For a two-sided test with $\alpha=0.05$, $z_{critical} = \pm 1.96$ [22, 27].
        
    - For a one-sided lower tail test with $\alpha=0.05$, $z_{critical} = -1.645$ [28].
        
    - For a one-sided upper tail test with $\alpha=0.05$, $z_{critical} = 1.645$ (information from outside the given sources, consistent with logic from [28]).
        
- **Decision Rule using Critical Values**: Reject $H_0$ if $|Z_{score}| > |z_{critical}|$ [22, 27].
    

#### 2.2.2 T-statistic (T-score)

- **When to use**: Typically used when [19, 20, 29]:
    
    - The **population variance ($\sigma^2$) is unknown**.
        
    - The **sample size (n) is small** (generally $n < 30$).
        
    - The variable follows a **Student's T-distribution**.
        
- **Degrees of Freedom (df)**:
    
    - For a single mean: $df = n-1$ (information from outside the given sources, generally applied to t-tests) [30].
        
    - For dependent samples (paired t-test): $df = n-1$ (where n is the number of pairs) (information from outside the given sources, but for magnesium example, implies n=10, df=9 consistent with [19]).
        
    - For independent samples with unknown but equal variances: $df = n_1 + n_2 - 2$ [31].
        
- **Formula for a single mean (unknown population variance)** [29]:  
    T=Xˉ−μ0SET=SEXˉ−μ0​​  
    Where:
    
    - $\bar{X}$ is the sample mean.
        
    - $\mu_0$ is the hypothesized population mean.
        
    - $SE$ is the standard error of the mean.
        
    - $SE = \frac{s}{\sqrt{n}}$ (information from outside the given sources, where $s$ is the sample standard deviation).
        
- **Formula for dependent samples (paired t-test)** [19]:  
    T=Dˉ−D0SEDT=SED​Dˉ−D0​​  
    Where:
    
    - $\bar{D}$ is the sample mean of the differences.
        
    - $D_0$ is the hypothesized population mean difference (often 0).
        
    - $SE_D$ is the standard error of the mean difference.
        
    - $SE_D = \frac{s_D}{\sqrt{n}}$ (information from outside the given sources, where $s_D$ is the sample standard deviation of the differences).
        
- **Formula for independent samples (unknown but assumed equal variances)** [31]:  
    T=(Xˉ1−Xˉ2)−(μ1−μ2)SEpooledT=SEpooled​(Xˉ1​−Xˉ2​)−(μ1​−μ2​)​  
    Where:
    
    - $\bar{X}_1, \bar{X}_2$ are the sample means.
        
    - $(\mu_1 - \mu_2)$ is the hypothesized difference between population means (often 0).
        
    - $SE_{pooled}$ is the standard error of the difference using pooled variance.
        
    - **Pooled Variance ($s_p^2$)**: Used when population variances are unknown but assumed equal [32].  
        sp2=(n1−1)s12+(n2−1)s22n1+n2−2sp2​=n1​+n2​−2(n1​−1)s12​+(n2​−1)s22​​  
        (information from outside the given sources, though the concept is mentioned in [32])
        
    - **Standard Error of the Difference using Pooled Variance**:  
        SEpooled=sp2(1n1+1n2)SEpooled​=sp2​(n1​1​+n2​1​)
        

- - ​  
        (information from outside the given sources, consistent with the description in [32])
        
- **Critical Value ($t_{critical}$)**: Value from the T-table based on the chosen significance level and degrees of freedom [30].
    
- **Decision Rule using Critical Values**: Reject $H_0$ if $|T_{score}| > |t_{critical}|$ [30].
    

### 2.3 The P-Value

- **Definition**: The P-value is the **smallest level of significance ($\alpha$) at which you can still reject the null hypothesis**, given your observed sample statistic [33, 34]. It is the probability of observing a test statistic as extreme as, or more extreme than, the one calculated, assuming the null hypothesis is true [33].
    
- **Importance**: It is the most common way to test hypotheses and is often provided directly by statistical software [33, 35].
    
- **Decision Rule**:
    
    - **If P-value < $\alpha$**, **reject the null hypothesis ($H_0$)** [36-38].
        
    - **If P-value $\geq \alpha$**, **fail to reject the null hypothesis ($H_0$)** [38-40].
        
- **Interpretation**:
    
    - A **lower P-value indicates stronger evidence against the null hypothesis** [35]. Researchers often look for P-values with "three zeros after the dot" (e.g., < 0.001) as extremely significant [35, 41].
        
    - If you cannot reject $H_0$ at a 0.05 significance level, you also cannot reject it at any smaller significance level (e.g., 0.01) [42].
        
- **Versatility**: The P-value rationale holds true for **all distributions** (normal, Student's T, binomial, uniform, etc.) [38].
    
- **Practical Use**: Online P-value calculators are recommended for support and verification of results [38, 43].