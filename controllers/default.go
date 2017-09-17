package controllers

import "github.com/kataras/iris/mvc"

type IndexController struct {
	mvc.Controller
}

func (c *IndexController) Get() {
	c.Ctx.ViewData("Content", "containers")
	c.Ctx.View("layout.html")
}
