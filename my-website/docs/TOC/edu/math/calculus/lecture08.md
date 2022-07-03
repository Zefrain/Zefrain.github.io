# Product Rule and Quotient Rule #

## important equations ##

### $p(x) = f(x)g(x)$ ###

$$
\begin{aligned}

\frac{d{p}}{d{x}} &= f(x)\frac{dg}{dx} + g(x)\frac{df}{dx} \\

\Longrightarrow \frac{d}{dx}x^{n} &= nx^{n-1} 

\end{aligned}
$$



### $q(x) = \frac{f(x)}{g(x)}$ ###

$$
\begin{aligned}

f(x) &= g(x)q(x) \\

\frac{df}{dx} &= g(x)\frac{dq}{dx} + \frac{f(x)}{g(x)}\frac{dg}{dx} \\

g\frac{df}{dx} &= g^{2}\frac{dq}{dx} + f\frac{dg}{dx} \\

g\frac{df}{dx} - f\frac{dg}{dx} &= g^{2}\frac{dq}{dx} \\

\frac{dq}{dx} &=\frac{g\frac{df}{dx}-f\frac{dg}{dx}}{g^{2}} 

\end{aligned}
$$


### Example ###

$$
\begin{aligned}

q(x) &= \frac{1}{x^N} \\

\frac{dq}{dx} &= \frac{x^N\frac{d1}{dx} - \frac{dx^N}{dx}}{x^{2N}} \\

\frac{dq}{dx} &= \frac{0 - N \times x^{N-1}}{x^{2N}} \\

\frac{dq}{dx} &= -N \times x^{-1-N} 

\end{aligned}
$$
