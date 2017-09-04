package routers

import (
	"github.com/astaxie/beego"
	"github.com/grayzone/labs/controllers"
)

func init() {
	beego.Router("/", &controllers.MainController{})
	beego.Router("/pdf", &controllers.PDFController{}, "Get:PDFInfo")
}
