package main

import (
	"github.com/grayzone/labs/controllers"
	//	_ "github.com/grayzone/labs/routers"
	"github.com/kataras/iris"
	"github.com/kataras/iris/middleware/logger"
	"github.com/kataras/iris/middleware/recover"
)

func main() {
	app := iris.New()

	app.Use(recover.New())
	app.Use(logger.New())

	app.StaticWeb("/static", "./static")

	templates := iris.HTML("./views", ".html")
	app.RegisterView(templates)

	app.Controller("/", new(controllers.MainController))

	app.Run(iris.Addr(":8080"))

}
