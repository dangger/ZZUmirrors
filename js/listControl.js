		$(function () {
            $.ajax({
                url: "/status/task_status.json",
                type: "post",
                dataType: "json",
                success: function (data) {
                    init(data);
                },
                error: function () { }
            });
           // init(json);
            
        });
      
        function init(data) {
            var json =data; // eval("(" + data + ")");
           
            var html = "";
            var apache=json.apache;
            var archlinux=json.archlinux;
            var centos=json.centos;
            var cygwin=json.cygwin;
            var debian=json.debian;
            var debian_cd=json["debian-cd"];
            var epel=json.epel;
            var fedora=json.fedora;
            var freebsd=json.freebsd;
            var gnu=json.gnu;
            var opensuse=json.opensuse;
            var qt=json.qt;
            var ubuntu=json.ubuntu;
            var ununtu_release=json["ubuntu-releases"];

			var pypi=json.pypi;
			var raspbian=json.raspbian;
			var kali=json.kali;
			
          //  html += AddHtml(apache, "apache");
          //  console.info("-->" + AddHtml(apache, "apache"));
            html += AddHtml(archlinux, "archlinux");
            html += AddHtml(centos, "centos");
           // html += AddHtml(cygwin, "cygwin");
            html += AddHtml(debian_cd, "debian-cd");
           // html += AddHtml(epel, "epel");
           // html += AddHtml(fedora, "fedora");
            html += AddHtml(freebsd, "freebsd");
         //   html += AddHtml(gnu, "gnu");
            html += AddHtml(opensuse, "opensuse");
            html += AddHtml(qt, "qt");
            html += AddHtml(ubuntu, "ubuntu");
            html += AddHtml(ununtu_release, "ubuntu-releases");
            html+=AddHtml(pypi, "pypi");
		    html+=AddHtml(raspbian, "raspbian");
			html+=AddHtml(kali, "kali");
			
            $(".mirror_list").append(html);
        }
        function AddHtml(obj, name) {
        //    console.info("-->"+obj);
            var showName = "",shuoming="";
                switch (name) {
                    case ("apache"):
                        showName = "Apache";
                        shuoming = "世界使用排名第一的Web服务器软件";
                        break;
                    case ("archlinux"):
                        showName = "Arch Linux";
                        shuoming = "以轻量简洁为设计理念的Linux发行版 <a class='text-red float-right' href='wiki/arch.html'>Help</a>";
                        break;
                    case ("centos"):
                        showName = "CentOS";
                        shuoming = "社区企业操作系统 <a class='text-red float-right' href='wiki/centos.html'>Help</a>";
                        break;
                    case ("cygwin"):
                        showName = "Cygwin";
                        shuoming = "windows平台上运行的类UNIX模拟环境";
                        break;
                    case ("debian"):
                        showName = "Debian";
                        shuoming = "Debian以稳定性闻名";
                        break;
                    case ("debian-cd"):
                        showName = "Debian-CD";
                        shuoming = "Debian系统镜像";
                        break;
                    case ("deepin"):
                        showName = "Deepin";
                        shuoming = "武汉深之度科技有限公司开发的Linux发行版";
                        break;
                    case ("deepin-cd"):
                        showName = "Deepin-CD";
                        shuoming = "Deepin系统镜像";
                        break;
                    case ("epel"):
                        showName = "EPEL";
                        shuoming = "yum软件源";
                        break;
                    case ("fedora"):
                        showName = "Fedora";
                        shuoming = "知名的Linux发行版,基于Red Hat Linux";
                        break;
                    case ("freebsd"):
                        showName = "FreeBSD";
                        shuoming = "类UNIX操作系统";
                        break;
                    case ("gnu"):
                        showName = "GNU";
                        shuoming = "GNU's Not Unix";
                        break;
                    case ("opensuse"):
                        showName = "openSUSE";
                        shuoming = "强大稳定的Linux开源操作系统";
                        break;
                    case ("qt"):
                        showName = "QT";
                        shuoming = "跨平台C++图形用户界面应用程序开发框架";
                        break;
                    case ("ubuntu"):
                        showName = "Ubuntu";
                        shuoming = "以桌面应用为主的Linux操作系统";
                        break;
                    case ("ubuntu-releases"):
                        showName = "Ubuntu-Releases";
                        shuoming = "Ubuntu发行版";
                        break;
					case ("pypi"):
                        showName = "PyPI";
                        shuoming = "The Python Package Index ";
                        break;
					case ("raspbian"):
                        showName = "Raspbian";
                        shuoming = "树莓派操作系统";
                        break;
					case ("kali"):
                        showName = "Kali Linux-images";
                        shuoming = "Kali Linux预装了许多渗透测试软件";
                        break;	
                }
                var color = "", msg = "";
                if (obj.status == 1) {
                    color = "bg-mix";//同步中
                    msg = "Sync running";
                } else if (obj.status == 2 && obj.exitcode !=0)  {//失败
                    color = "bg-yellow-light";
                    msg = "Sync failed";
                } else if (obj.status == 2 && obj.exitcode ==0) {
                    color = "bg-main";//成功
                    msg = "Sync succeed";
                } else if (obj.status == 0) {
                    color = "bg-green-light";//initial
                    msg = "Sync initial";
                }
                var h = "<tr class=\"fadein-left\"><td><a href=\"/" + name + "\">" + showName + "</a></td><td><span class=\"tag " + color + "\">" + msg + "</span></td><td>" + shuoming + "</td></tr>";
                return h;
                   ;
        }