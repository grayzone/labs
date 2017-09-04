package models

import (
	"fmt"

	"github.com/astaxie/beego"
	"github.com/astaxie/beego/orm"

	_ "github.com/lib/pq"
)

func init() {

	//	initPostgres()
	//	createTables()
}

func initPostgres() {
	beego.Info("enable postgres")
	orm.Debug = false
	orm.RegisterDriver("postgres", orm.DRPostgres)
	connstr := "user=postgres password=123456 sslmode=disable dbname=" + beego.AppConfig.String("dbname") + " host=" + beego.AppConfig.String("dbhost")
	fmt.Println(connstr)
	orm.RegisterDataBase("default", "postgres", connstr)
}

func createTables() error {
	orm.RegisterModel(new(PDFModule))

	name := "default"
	force := false
	verbose := true
	err := orm.RunSyncdb(name, force, verbose)
	return err
}
