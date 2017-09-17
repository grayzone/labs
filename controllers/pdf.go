package controllers

import (
	"github.com/grayzone/labs/models"
	"github.com/kataras/iris"
)

type PDFController struct {
	iris.Controller
}

func (c *PDFController) PostInfo() {
	var pdf models.PDFModule
	pdf.ID, _ = c.Ctx.PostValueInt64("id")
	pdf.Read()
	c.Ctx.JSON(pdf)
}
