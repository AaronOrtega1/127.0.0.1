---
link: "[[1756144012-business-intelligence-analyst-udemy-course-2025|Business Intelligence Analyst Udemy Course 2025]]"
aliases: 
  - "Hypothesis Testing Applications"
tags:
  - Knowledge
  - math
  - statistics
  - hypothesis_testing
created_date:
  "2025-09-09"
---
# Hypothesis Testing Applications
### 4.1 Testing for a Single Mean

- **Known Population Variance (Z-Test)**:
    
    - **Example**: Testing if the mean data scientist salary is $113,000, with a known population standard deviation of $15,000 and a sample size of 30 [49].
        
    - $H_0: \mu = $113,000$ [50]
        
    - $H_1: \mu \neq $113,000$ [50]
        
    - Calculated Z-score: -4.67 [26].
        
    - At $\alpha=0.05$ (critical $z=\pm 1.96$): $|-4.67| > 1.96$, so reject $H_0$ [27, 51].
        
    - At $\alpha=0.01$ (critical $z=\pm 2.58$): $|-4.67| > 2.58$, so reject $H_0$ [51, 52].
        
- **Unknown Population Variance (T-Test)**:
    
    - **Example**: Testing if a competitor's email open rate is higher than your company's 40%, using a small sample of 10 campaigns [53, 54].
        
    - $H_0: \mu \leq 40%$ [54]
        
    - $H_1: \mu > 40%$ [54]
        
    - Calculated T-score: -0.53 [29].
        
    - At $\alpha=0.05$ (one-sided, critical $t=1.83$ for $df=9$): $|-0.53| < 1.83$, so fail to reject $H_0$ [30].
        
    - P-value: 0.304 [40]. Since $0.304 > 0.05$, fail to reject $H_0$ [40].
        

### 4.2 Testing for Multiple Means

#### 4.2.1 Dependent Samples (Paired T-Test)

- **Definition**: Samples where observations are related, typically from the same subjects "before and after" a treatment or event (e.g., weight loss, blood tests) [55, 56].
    
- **Example**: Testing the effectiveness of a drug on magnesium levels in 10 people [56].
    
    - $H_0: \mu_{before} \geq \mu_{after}$ (or mean difference $D_0 \geq 0$) [57, 58]
        
    - $H_1: \mu_{before} < \mu_{after}$ (or mean difference $D_0 < 0$) [57, 58]
        
    - Calculated T-score: -2.29 [36].
        
    - P-value: 0.024 [36].
        
    - At $\alpha=0.05$: $0.024 < 0.05$, so reject $H_0$ [39].
        
    - At $\alpha=0.01$: $0.024 > 0.01$, so fail to reject $H_0$ [39].
        
    - Researcher's choice of $\alpha$ depends on the caution needed (e.g., 1% for drug efficacy) [39, 48]. Increasing sample size can improve precision [48].
        

#### 4.2.2 Independent Samples

- **Known Variances (Z-Test)**:
    
    - **Example**: Testing if management students outperform engineering students by 4 percentage points, with known population standard deviations and large sample sizes (170 for each department) [59-61].
        
    - $H_0: \mu_{Eng} - \mu_{Mgt} = -4%$ [60]
        
    - $H_1: \mu_{Eng} - \mu_{Mgt} \neq -4%$ [61]
        
    - Calculated Z-score: -2.44 [24].
        
    - P-value (two-sided): 0.015 [24].
        
    - At $\alpha=0.05$: $0.015 < 0.05$, so reject $H_0$ [62].
        
    - Conclusion: Statistical evidence suggests the difference in means is not exactly 4% [62]. The negative Z-score suggests the true difference is likely lower than -4% [62, 63].
        
- **Unknown Equal Variances (Pooled T-Test)**:
    
    - **Definition**: Samples are independent, but their population variances are unknown yet assumed to be equal [64, 65].
        
    - **Example**: Testing if apple prices in New York are different from those in Los Angeles, using small samples (10 shops in NY, 8 in LA) [64].
        
    - $H_0: \mu_{NY} = \mu_{LA}$ (or $\mu_{NY} - \mu_{LA} = 0$) [65]
        
    - $H_1: \mu_{NY} \neq \mu_{LA}$ (or $\mu_{NY} - \mu_{LA} \neq 0$) [65]
        
    - Uses **pooled variance** to estimate the common unknown variance [32]. Calculated pooled variance = 0.05 [32].
        
    - Degrees of freedom: $df = n_1 + n_2 - 2 = 10 + 8 - 2 = 16$ [31].
        
    - Calculated T-statistic: 6.53 [31].
        
    - P-value (two-sided): < 0.000 (e.g., 0.000001), indicating extreme significance [41].
        
    - Decision: Reject $H_0$ at all common significance levels [66].
        
    - **Note**: An extremely significant result (e.g., T-score > 4) might suggest the initial hypothesis was obvious or poorly designed [41, 66].