module.exports = async function($) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      ${$.app.views.head($)}
    </head>
    <body>
      <main>${$.page.content}</main>
    </body>
    </html>
  `
}
