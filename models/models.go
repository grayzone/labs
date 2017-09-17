package models

import (
	"fmt"

	"github.com/jinzhu/gorm"

	_ "github.com/jinzhu/gorm/dialects/postgres"
)

var orm *gorm.DB

func init() {

	initPostgres()
	createTables()
}

func initPostgres() {
	//	connstr := "user=postgres password=123456 sslmode=disable dbname=labs " + beego.AppConfig.String("dbname") + " host=" + beego.AppConfig.String("dbhost")
	connstr := "user=postgres password=123456 sslmode=disable dbname=labs_test host=127.0.0.1 port=5433"
	fmt.Println("db connection:", connstr)
	var err error
	orm, err = gorm.Open("postgres", connstr)
	if err != nil {
		fmt.Printf(err.Error())
		panic("failed to connect database")
	}
	orm.LogMode(true)
	orm.DB().SetMaxIdleConns(10)
	orm.DB().SetMaxOpenConns(100)
}

func createTables() {
	orm.AutoMigrate(&PDFModule{})
}

func CloseDB() {
	orm.Close()
}
