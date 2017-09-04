package models

import "github.com/astaxie/beego/orm"

type PDFModule struct {
	ID      int    `orm:"pk;auto;column(id)"`
	MD5     string `orm:"column(md5)"`
	Content []byte `orm:"type(bytea)"`
}

func (m *PDFModule) TableName() string {
	return "pdfmodule"
}

func GetPDFInfo() PDFModule {
	var result PDFModule

	orm.NewOrm().Read(&result)
	return result
}
