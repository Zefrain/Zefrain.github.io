# Dirivative Rules #

## Common Functions ##

| Functions      | Derivative                |
|----------------|---------------------------|
| $C$            | $0$                       |
| $x^n$          | $nx^{n-1}$                |
| $a^x$          | $a^x\ln(a)$               |
| $e^x$          | $e^x$                     |
| $log_{a}x$     | $\frac{1}{x\ln{a}}$       |
| $\ln{x}$       | $\frac{1}{x}$             |
| $\sin(x)$      | $\cos(x)$                 |
| $\cos(x)$      | $-\sin(x)$                |
| $\tan(x)$      | $sec^2(x)$                |
| $\sin^{-1}(x)$ | $\frac{1}{\sqrt{1-x^2}}$  |
| $\cos^{-1}(x)$ | $-\frac{1}{\sqrt{1-x^2}}$ |
| $\tan^{-1}{x}$ | $\frac{1}{1+x^2}$         |
## Rules ##

| Functions       | Derivative                    |
|-----------------|-------------------------------|
| $cf$            | $cf'$                         |
| $x^n$           | $nx^{n-1}$                    |
| $f+g$           | $f'+g'$                       |
| $f-g$           | $f'-g'$                       |
| $fg$            | $fg'+f'g$                     |
| $\frac{f}{g}$   | $\frac{f'g-fg'}{g^2}$         |
| $\frac{1}{f}$   | $\frac{f'}{f^2}$              |
| $f \cdot g$      | $(f' \cdot g) \times g'$    |
| $f(g(x))$       | $f'(g(x))g'(x)$               |
| $\frac{dy}{dx}$ | $\frac{dy}{du} \frac{du}{dx}$ |



- $$\lim_{x \to 0, y \to 1/2} \arcsin (\sqrt{x + y })$$

$$
\begin{aligned}
\text{let } u &= x + y, \\
\text{then: Equation } &= \lim_{u \to \frac{1}{2}} \arcsin (\sqrt{u}) \\
           &=\lim_{u \to \frac{1}{2}} \arcsin {\sqrt{\frac{1}{2}}}
\end{aligned}
$$
