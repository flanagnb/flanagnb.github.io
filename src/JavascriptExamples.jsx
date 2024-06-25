
export default function JavascriptExamples() {
  return (
    <>
      <div id="clocks">
        <canvas id="analog-clock" width="150" height="150" style={{"background-color": "#999"}}></canvas>
        <div id="digital-clock" style={{"font-family": "monospaced", "color": "green"}}></div>
      </div>
      <div id="joke-container"></div>
    </>
  )
}
