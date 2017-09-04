package controllers

import "github.com/kataras/iris/mvc"

type MainController struct {
	mvc.Controller
}

func (c *MainController) Get() {
	c.Ctx.ViewData("LayoutContent", "containers")
	c.Ctx.View("layout.html")

}
