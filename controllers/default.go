package controllers

import "github.com/kataras/iris/v12/mvc"

type IndexController struct {
	// Ctx iris.Context
}

var indexView = mvc.View{
	Name: "layout.html",
	Data: map[string]string{
		"Content": "containers",
	},
}

func (c *IndexController) Get() mvc.Result {
	/* OR
	   return nothing and
	   c.Ctx.ViewData("Content","containers")
	   c.Ctx.View("layout.html") or
	   c.Ctx.View("layout.html", iris.Map{"Content":"containers"})
	*/
	return indexView
}
