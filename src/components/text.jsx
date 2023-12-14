import "./text.scss";
const Text = (props) => {
    const text_1 = `" I've been interested in coding
    for a while but never taking the jump. until
     now. I coundn't recommended this course enought.
     I'm now in the job of my dreams and so excited
     about the future. "`

     const text_2 = `" If you want to lay the best foundation
     possible i'd recommend taking this course. The depth
     the instructors go into is incredible.
     I now feel so confident about starting up as a professionaldeveloper. "`
    return(
        <article>
            <p>
                {props.state?text_1: text_2}
            </p>
            <span>
                <strong>{props.state?`Tanya Sinclair`:`John Tarkport`}</strong>
                {props.state?`UX Engineer`: `Front-end Developer`}
            </span>
        </article>
    )
}

export default Text;