# Chains $f(g(x))$ and the Chain Rule #

## $f(g(x))$ ##

$$
y = g(x), z = f(x) \\
\\
\begin{aligned}
\frac{dz}{dx} &= \frac{dz}{dy} \frac{dy}{dx} \\
\end{aligned}
$$

## $sin(3x)$ ##

$$
y = 3x, z = sin(y) \\

\begin{aligned}
\frac{dz}{dx} &= cos(y)(3) \\
              &=3cos(3x)
\end{aligned}
    
$$


## $z = \frac{1}{\sqrt{1-x^2}}$ ##

$$
\begin{align*}
&y = 1-x^2, z = y^{-\frac{1}{2}} \\
\frac{dz}{dx} &= \frac{dz}{dy}\frac{dy}{dx} &\\
              &= (y^{-\frac{3}{2}})(-2x) & \\
              &= (1-x^2)^{-\frac{3}{2}} \dot x &
\end{align*}
$$


## $z=e^{-\frac{x^2}{2}}$ ##

$$
\begin{aligned}
&z = e^y \:\: y = -\frac{x^2}{2} \\
\frac{dz}{dx} &= \frac{dz}{dy} \frac{dy}{dx}\\
              &= e^y(-x) \\
              &= -xe^{-\frac{x^2}{2}}
\end{aligned}
$$


  - 2nd derivative
  $f = -x;\,\, g = \frac{x^2}{2}$

  $$
  \begin{aligned}
  &f\frac{dg}{dx}+g\frac{df}{dx} \\
  =&(-x)(-xe^{\frac{-x^2}{2}}) + (e^{\frac{x^2}{2}})(-1) \\
  =&(x^2-1)(e^{\frac{-x^2}{2}})
  \end{aligned}
  $$
