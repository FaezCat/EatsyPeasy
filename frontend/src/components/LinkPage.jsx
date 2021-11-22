import Clipboard from 'clipboard/dist/clipboard.min'


export default function LinkPage(props) {
  
  new Clipboard('.btn')
  return (
    <div className="link-text">
      <h1>Unique link to share with your friends:</h1>
      <div id="link-text">
        localhost:3001/poll/{props.uniqueLink}
      </div>
      <button class="btn" data-clipboard-target="#link-text">
        <img src="https://img.icons8.com/office/16/000000/clipboard.png" alt="Copy to clipboard" />
      </button>
    </div>
  )
}