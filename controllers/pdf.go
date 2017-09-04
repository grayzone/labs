package controllers

import (
	"github.com/astaxie/beego"
	"github.com/grayzone/labs/models"
)

type PDFController struct {
	beego.Controller
}

func (c *PDFController) PDFInfo() {

	result := models.GetPDFInfo()

	c.Data["json"] = &result
	c.ServeJSON()
}
