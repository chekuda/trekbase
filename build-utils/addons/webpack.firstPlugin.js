module.exports = {
  plugins: [
    function firstOne(){
      const compiler = this

      console.log(compiler)
    }
  ]
}