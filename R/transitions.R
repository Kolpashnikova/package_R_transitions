#' <Add Title>
#'
#' <Add Description>
#'
#' @import htmlwidgets
#'
#' @export
transitions <- function(df, names, width = NULL, height = NULL, elementId = NULL) {

  # forward options using x
  x = list(
    data = df,
    names = names,
    message = "works"
  )

  # create widget
  htmlwidgets::createWidget(
    name = 'transitions',
    x,
    width = width,
    height = height,
    package = 'transitions',
    elementId = elementId
  )
}

#' Shiny bindings for transitions
#'
#' Output and render functions for using transitions within Shiny
#' applications and interactive Rmd documents.
#'
#' @param outputId output variable to read from
#' @param width,height Must be a valid CSS unit (like \code{'100\%'},
#'   \code{'400px'}, \code{'auto'}) or a number, which will be coerced to a
#'   string and have \code{'px'} appended.
#' @param expr An expression that generates a transitions
#' @param env The environment in which to evaluate \code{expr}.
#' @param quoted Is \code{expr} a quoted expression (with \code{quote()})? This
#'   is useful if you want to save an expression in a variable.
#'
#' @name transitions-shiny
#'
#' @export
transitionsOutput <- function(outputId, width = '100%', height = '400px'){
  htmlwidgets::shinyWidgetOutput(outputId, 'transitions', width, height, package = 'transitions')
}

#' @rdname transitions-shiny
#' @export
renderTransitions <- function(expr, env = parent.frame(), quoted = FALSE) {
  if (!quoted) { expr <- substitute(expr) } # force quoted
  htmlwidgets::shinyRenderWidget(expr, transitionsOutput, env, quoted = TRUE)
}
