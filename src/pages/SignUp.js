import React from "react";


export default function SignUp(){
 return   <div className="signup">
       <div ><img className="signup-img" src="https://img.freepik.com/free-photo/adha-shopping-trolley-phones-perspective-side-white-background_187299-39332.jpg?size=626&ext=jpg&ga=GA1.2.148082434.1700502659&semt=ais" alt=""/></div>
       
       <div className="signup-form-div" >
            <h1>Create an account</h1>
            <p>Enter your details below</p>

            <form className="signup-form">
                <input className="signup-input" type="text" placeholder="Name"/>
                <input className="signup-input" type="text" pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$|[0-9()+\- ]+" placeholder="Email or Phone Number"/>
                <input className="signup-input" type="password" placeholder="Password"/>
                <button className="signup-button first-form-btn" type="submit">Create Account</button>
                <button className="signup-button second-form-btn" type="submit">
                <img className="google-logo" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAABI1BMVEX////pQTU0qFNChfT6uwjM2/sxffM+g/RmmPX6uAD6/P4qe/PpPzPoLx/pPTAipEfnJRD2u7joNykrpk3oKxr75eQXokL3xMLoMyT7wQDJ5M/4y8n1trP0r6v63Nr++fnvgHrzpKDtcWrsYVnoNDf7zGj89uj82ZH+7c380n3+8tj94Kn7wDX/+vL95LL93Z20y/r7y156pfeQs/iaz6bs9u7c5v263cK/0/tKr2OLyJn97+7rVk3qSj/nHgDymZTziAD4rxHtZC7yhiT2oRjsWTHweij0lh7wjIf4rkARc/Ojv/nhwEi1szOGsEhYkfVSqk7EtS2YsD1svH/YtyPpuRm4rgxbtXGPt+U+kcc5m5w2onY9jdI6lrA0oH89id82pGtkEKofAAAES0lEQVRogdWXCXPaOBiGjeKSOviKZYQxBAxJtm16bDflKCSEHnu06ZFuaZfuvf//V6x8UIwlWZIxM7vvTCaZsfXo86tXnxRF+U/ootNqHLbbh41W56JEbLfeDi6NUB5W9MdlcNTpbk++aAQz23NMvZKSbjqeXQkOt/uEVt8xnA1uegbD6beKkrtHM9dkkFd8t3JUxJ5uz/FyyQnfM4+k2W0hdIzXG1Lo+rEhiI7wbl9iaXtXpjg6lHl1KIi+ODbk0KHcQIjdciTLjuVdCljTvpJwOy3T7PDYc7cYGsvmZXJuF2a7XPYWdbc57N4WdfPYjR3WXXdzcoK7rGG7huHahkd0M51btzJj5lt3bDPoNTp1rE6jF5j2Zh+2ufszcBho05jNMxHu9GbG11J0l8tuMQzX7WNq02tdrlzk160wDhxvxjxsGhUnmpzPnlNN0d1ezphugL+W74lSpx4N3HbRtkV6bZ9WuHPMbXQtAfbZsxMamz9QRKfN5ztjf6OpqvZis3izUsKVKtQdDFebL9N03amXw1bUSM3vU3CBhInprhbTVe2HVfFOvyS2cm8FV5s/xnTdK+2arK7V/Cmie/Oy2Gdamv68coJXs6SkKMr9NBzrxYnzqiy2cpqBN1/aZcVQUR6oGTVfM9+9Jaz4/YdaFq7dYbEPrquCqh1EA85I+F0mvLYnqNooGvCIgKsPS4DHvnxLwB8wLReHVx9HA+5l4dppGfA3DDhzPSXg+0+iAdmYq9r9MuDn0YDviLA8+p/Ad2rLjhaUBS8jigl8N5soieJutn+yiXbTuJLtL9Vya/t0EfCkcZGHhfaWCb+5TRcJj1suGfR3aMhcUoZIW+LDInNAa+p7AKeS7FE1w96/SZ5srKj2+QMAAEqW/oaAn68epdk/g1DWQA5+k13RJCxKeo9qH0EsS6r0EZHQ6mj1bHUR1dQPCRvAhQz8nIzi+mHC/gTWQmOJwrOOpyxPLv/qO5CWxJreJgqvPl0/xf+2hAnchANRNhGVdcojnWqfQVZwKca+RfabtCs46r8QbFE6aXg6K5EWkErn+z4ig7LenomGFgUOIPQ57KeUujeWM9KUSgcod6sOv1xT2OmQJ6LDgQXYxY8h+pXmeLZwRfERnQ7Qko4fT/AI9Fs1a3rW8TxjsPMWGGRX1p+C+HXr970M/XpEgSuAlpiEj+Bi4A8j+ePpEqGv70L4x4Y11SfU7xyyjEnqtxAKf5AFN6tAf6a20f7eARXOtp0j9Nf6hK5RTQk1KEi3Jn8n1tQes9iYzlpUbvFxJhmGb1l7nMnqeR57C7r1z02Nw8Z7oygdoi88Ns4MZOc9T0josjNcFllW4UN3gGSLz+tvZPFSzkNL7v43tsS9YfXNPG+gEB5aE4krTqp6wPUeomUhdCh/Aa3cRjyVvsmnNRwvACIngBChyVTaauoE04mFe/lKyAKLwXirmrMz+L4/xsK/ysQW1r+Fmn7uHSXAxAAAAABJRU5ErkJggg==" alt=""/>
                Sign up with Google</button>
       </form>
       <p className="login">Already have an account ? <a href="https://www.google.com">Log in</a></p>
       </div>
       
           
       
    </div>
}