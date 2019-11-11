package controllers

import (
	"github.com/grayzone/labs/models"

	"github.com/kataras/iris/v12"
)

type PDFController struct {
	Ctx iris.Context
}

func (c *PDFController) PostInfo() {
	var pdf models.PDFModule
	pdf.ID, _ = c.Ctx.PostValueInt64("id")
	pdf.Read()
	c.Ctx.JSON(pdf)
}
