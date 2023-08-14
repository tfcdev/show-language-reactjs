import {CopyToClipboard} from "react-copy-to-clipboard"
import style from "./style.module.css"

const Main = () => {

  const btn = (text) => {
    return (      
      <CopyToClipboard text={text}> 
        <button>Copy</button> 
      </CopyToClipboard>
    )
  }

  // function clipboard (e) {
  //   console.log(e.target.parentNode.firstChild.innerText)
  // }

  return (
    <main className={style.Main}>
      <section>
        
        <h1>FlexBox</h1>

        <p>O FlexBox é um ferramenta que veio com o CSS-3, que auxiliam os desenvolvedores a criação de layouts responsivos.</p>

      </section>
      
      <h3>Exemplos</h3>

      <section>
        <h4>Default values</h4>
        <pre>
          <code>{`
            display: flex;
            flex-direction: row;
          `}
          </code>

          {btn(`display: flex;
                flex-direction: row;`)}
        </pre>

        <h4>Centered Items</h4>
        <pre>
          <code>{`
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;`}
          </code>

          {btn(`
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;`)}
        </pre>

        <h4>Items with space between</h4>
        <pre>
          <code>{`
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;`}
          </code>

          {btn(`
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;`)}
        </pre>

        <h4>Items aligned in the center</h4>
        <pre>
          <code>{`
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-evenly;`}
          </code>

          {btn(`
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-evenly;`)}
        </pre>

        <h4>Content aligned in the center with <strong>flex-wrap: wrap;</strong></h4>
        <pre>
          <code>{`
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;

            - new function -
            align-content: center;`}
          </code>

          {btn(`
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;

            - new function -
            align-content: center;`)}
        </pre>

      </section>

    </main>
  )
}

export default Main;