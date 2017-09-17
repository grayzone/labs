package models

type PDFModule struct {
	ID      int64
	MD5     string `gorm:"column:md5"`
	Content []byte
}

func (PDFModule) TableName() string {
	return "pdfmodule"
}

func (p *PDFModule) Read() {
	orm.Find(p)
}
