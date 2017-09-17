package main

import (
	"github.com/grayzone/labs/controllers"
	"github.com/grayzone/labs/models"
	//	_ "github.com/grayzone/labs/routers"
	"github.com/kataras/iris"
	"github.com/kataras/iris/middleware/logger"
	"github.com/kataras/iris/middleware/recover"
)

var (
	app *iris.Application
)

func configure(app *iris.Application) {
	app.Configure(iris.WithoutServerError(iris.ErrServerClosed), iris.WithCharset("UTF-8"))
	templates := iris.HTML("./views", ".html")
	//	templates.Layout("layout.html")
	//	templates.Reload(true)
	app.RegisterView(templates)
	app.StaticWeb("/static", "./static")
	app.StaticWeb("/download", "./download")
}

func main() {
	app = iris.New()
	app.Configure(configure)

	app.Use(recover.New())
	app.Use(logger.New())

	app.Logger().SetLevel("debug")

	app.Controller("/", new(controllers.IndexController))

	iris.RegisterOnInterrupt(models.CloseDB)

	app.Run(iris.Addr(":8080"))

}
