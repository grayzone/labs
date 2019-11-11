package main

import (
	"github.com/grayzone/labs/controllers"
	"github.com/grayzone/labs/models"
	//	_ "github.com/grayzone/labs/routers"
	"github.com/kataras/iris/v12"
	"github.com/kataras/iris/v12/middleware/logger"
	"github.com/kataras/iris/v12/middleware/recover"
	"github.com/kataras/iris/v12/mvc"
)

func main() {
	app := iris.New()
	app.Logger().SetLevel("debug")

	templates := iris.HTML("./views", ".html")
	//	templates.Layout("layout.html")
	//	templates.Reload(true)
	app.RegisterView(templates)

	app.HandleDir("/static", "./static")
	app.HandleDir("/download", "./download")

	app.Use(recover.New())
	app.Use(logger.New())

	mvc.New(app).Handle(new(controllers.IndexController))

	iris.RegisterOnInterrupt(models.CloseDB)

	app.Run(iris.Addr(":8080"), iris.WithoutServerError(iris.ErrServerClosed))
}
