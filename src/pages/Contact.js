import React from "react";
import Input from "../components/Input";
import ContactInputObject from "../components/ContactInputObject";

const contacts = ContactInputObject.map((cont)=>{
    return <Input
    {...cont}
    />
})

export default function Contact (){
    return(
    <div>
        <div style={{display: "flex", alignItems: "center", fontFamily: "system-ui"}}>
            <p className="head-contact" style={{color: "gray", width: "1px"}}>Home  </p> 
            <p style={{marginLeft: "-10px"}}> /   Contact</p>
        </div>
    <div className="main-contact">
        <div className="sect-contact">
            <div className="phone-img-div" >
                <img className="phone-img" src="data:image/png;base64,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" alt=""  />
                <h2 >Call To Us</h2>
            </div>
            <p className="contact-content">We are available 24/7, 7 days a week.</p>
            <p className="contact-content">phone: +2348132986371</p>
            <hr/>

            <div className="phone-img-div">
                <img className="phone-img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAsVBMVEVnAQD///9jAABgAACUWVp9OztiAAD+/v2EQTyEQD6PWFmOWlldAABlAABeAABpAAD//f9ZAAC1kZL8//3r2tr//vqtg4OPUk6neHjl0dTx6euRVlTv4uN2JCGLTlCpeHXKrqnCpaXz8Ot+KSq6m5tqEgnUurqDSEWdYmDgzcvaxMGSYV778/VuIBqjcXiRTU20jYh1GRayhIaIREhxGxrq5OnFrqmfbGjNsbLl2deENTtv28pEAAAF0klEQVR4nO2beVciORTFK4mTEs2rBVARKQERulncumfGtr//B5tsFJs6IHhM9bm/Pv2PmpzcSurl3eRVFAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEDApJRGqeRSiv2Quo/U9hYanCKliuuj/bkulIqIf7WgDVIh6012GJp1KYObQ6662YH0GbJuTl8taQUi1WONAypssF4S1Drlos/ODiiQ6d76KqRZlPfls9+feR/38qtlLaD0xo9q9vDXvjzMfF83aTiTKM7L598pFO2DKjrlOjgXXy3MQ1HyYsTFdn1lF8nHHz0lF5ldp7Hp6iWJAplFEnpMjfIVan040FPeKnsxPYpABEZ8wGL9z2z4dnC3H5RI+a0X2KzbHgeBKCR5bMd1JCb+BRpJ2jXt0kkfyZFvP5ZH9lnVAtkS5wpPpegxl9hcDuWOgZBSPrw0TeOM9YQ8DVMhT/NHKzBj7add46B4avvH85inPESFMTvR41HTjMWxEXm1m0R1ZeTpptlU6TV7yuJAFUZUc5t/zFo77BqUtKwkvc3XTKuAFaYR/7tjF2qD1beWSEmdNewS7RRc9xGyQo2kCXMTMhK0hcZ0HkR1yjDxDcJWmPLkl1+ol1vlJBRdWj2xDqJeUtgKjVmsz0Nq8f9jFMU8iJ7rlNb9feAK9U/U1MUNHVLVuxsjpS6Img6mouwgeIUp59+sB9IJdDd5t626N++f8V3fluxg8Ap1ysaLjpf4XpZKed0L1EGUL97a8BWa41M1tnlJzEbqrYFyVWaiauWAtAoKtZmVPe8UxsPXZ5GGYy+wZ2zz0m+qoDClVDrrr1dhu3gthTNBNLbnVz9ySis3h5b8+xl7y/iXdp41vufrDSujMBI/Z05i3FpXUdr52c/NCa6OQqKnjpWRrYXUhZ3vPPHNt7Q6Cs2+MfFnZzpLdcZfK5KlnZ+8ehZQKYX04rVo489tflPaeUPz1eS8QgrNruhZGH9j5z2x2Qk3m1VIYTJy+8Xc+OvNn/tMdP7DkdpsVh2F6tYv0LafMW38F3a+6Q8fNyVWRqHqOoHtyBl/rahuMlErrHOX+sXa3ZBYEYUkLpyqm4Ib4+9m7h//Uk5I8mLmZvFCrjWtiEJZc86dHUvtp8S/XqJTre18Goljd94R19Yu0qqhkJ5mTtKz8Q2l8Xf80Km28R/PTnB7LTevgkJtLToujJ77fI2LufFfsvO5v5frrK7TKiiMxNjoy1h/MXbpjP+ynee8z7Iz47BWktMqKMx/2WtANinTUYq88V+187kJQVrir+XUPHyFPPcb4WrGoi1jf9yXK2HFZz0mNV9qH7xC2WWZXqGsPVwZo44uIl+/9uRDsy02MtaV1TmnEVcuI8uKVTWp/7/Wvsjcny8uc0JXKGvuCDQ+3q5eRB67IBvXhD/LCF3hcOYs4fO2F2zCbYtsNoyqcOZNvOmyl/M3TxE3erBnVjpdbcrg51AnKi42xqy/cb70DnnfPRUfewNWGFE+cvcsk51KRchVOWRslAR+Q1pmny9yx0oF6U876uaeI1SFUjuIlhtnm29zObrcCXHvFlvadchAFRL3dTBsNqCdq01oMHPG6kpKClShpEHmruOv5Y5TaCZRXNtXsZENKMg5bLATVZhZiBtsKj9SGsrl1F21zQp1EmA9TYOdkrsyNMHiY3XoyaPbMzoUpsKHsdsn+lvv9Gv9RFz13Z4xfghKYUQD++jbztOP9qiZJDVypaVtuxgGwSgUS/XdzR03wtWeuGiWB1bh1JdSpMq7CdaO9vmeh1JJ5Yl/QDXCS3XeN3dirzJvvWfczaviw6nzXq7V7//eu1b/d3/+tAKq1f+c7y1aAX1voWPgJ3wzI0KJpBaeHPy7J7Vz4ve5UH7ob9eCmkHDH//9oTkLPeg3pGEtUcOf/x0wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALPEfMBBrb6o6OF4AAAAASUVORK5CYII=" alt="" />
                <h2>Write To Us</h2>
                
            </div>
            <p className="contact-content">Fill out our form and we will contact you within 24 hours.</p>
                <p className="contact-content">Emails: customer@exclusive.com</p>
                <p className="contact-content">Emails: support@exclusive.com</p>
        </div>



            <div className="contact-div">
                {contacts}
                <textarea className="contact-msg" placeholder="Your Message"> Your Message</textarea>
                <button className="contact-btn">Send Message</button>
            </div>
    </div>
</div>
      
    )
}