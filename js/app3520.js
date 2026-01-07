$(document).ready(function() {
    $(document).foundation(), Foundation.Abide.defaults.patterns.dashes_only = /^[0-9-]*$/
}), $baseUrl = $("body").attr("data-baseUrl"), $(function() {
    function e() {
        return window.pageYOffset || document.documentElement.scrollTop
    }
    $(".footer-fixo").hide();
    var a = 10;
    $(window).scroll(function() {
        var t = e();
        t >= a ? ($(".footer-fixo").fadeIn(), $('#topo-fixo-muito-massa').addClass('exibir'), $("#bar-lgpd").addClass('scroll'), $(".zopim").css("margin-bottom", "69px"), $(".back-to-top").addClass("show"), $(".copyright").css("margin-bottom", $(".footer-fixo").innerHeight())) : ($(".footer-fixo").fadeOut(), $("#bar-lgpd").removeClass('scroll'), $(".back-to-top").removeClass("show"), $('#topo-fixo-muito-massa').removeClass('exibir'), $(".copyright").css("margin-bottom", "0"))
    })
}), $(".form-floating-label input, .form-floating-label textarea").focusin(function() {
    $(this).parent().addClass("has-value")
}), $(".form-floating-label input, .form-floating-label textarea").blur(function() {
    !$(this).val().length > 0 && $(this).parent().removeClass("has-value")
}), $(".botao-mobile").on("click touch tap", function(e) {
    e.preventDefault(), $(".menu-mobile").fadeIn(), setTimeout(function() {
        $(".menu-body").fadeIn("slow", function() {
            $(this).addClass("show-menu")
        })
    }, 500)
}),  $(function() {
    $("#dpt").on("click", function(e) {
        e.preventDefault(), console.log("click")
    })
}), $("#dpt").on("focus", function() {
    $(this).blur()
}), $(function() {

    $('#modal').validate({
        errorElement: 'span', //Tag que será criada aonde aparecerá a mensagem
        errorClass: 'help-block help-block-error', // Class da tag criada
        onkeyup: false,
        onclick: false,
        onfocusout: false,
        focusInvalid: true,
        ignore: '',
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            }
        },
        messages: {
            nome: {
                required: 'Preencha seu nome.'
            },
            email: {
                required: 'Preencha seu email.',
                email: 'Preencha no formato de email.'
            },
            telefone: {
                required: 'Preencha seu telefone.'
            }
        },
        // Mensagens de er
        // Execulta em caso for requerido o submit mas ainda há campos pendentes
        invalidHandler: function (event, validator) {
            //alertaErro('Campos com <strong>*</strong> são obrigatórios', '.alertaPatrocinador');
        },
        errorPlacement: function (error, element) { // render error placement for each input type

            console.log(element);
            console.log(error);

            $(element).parent().append(error);
        },
        // Ação dos campos invalidos
        // element = DOM do campo inválido
        highlight: function (element) {
            $(element).closest('.form-group').addClass('has-error');
        },
        // Ação contraria do (highlight), campos validos
        unhighlight: function (element) {
            $(element).closest('.form-group').removeClass('has-error');
        },
        // Exculta antes do submit do formulario
    });

    var $assets = $baseUrl + 'assets/';

    Modernizr.load([{
        load: [
            $assets + 'plugins/build/ouibounce.min.js'
        ],
        complete: function() {
            ouibounce(false, {
                callback: function() {
                    $('.modal-exit').fadeIn('100');
                }
            });
        }
    }]);

    $('.btn-fechar-modal').bind('click touch', function() {
        $('.modal-exit').fadeOut('400');
    });

    $('.btn-fechar-modal').click(function() {
        $('.modal-exit').fadeOut('400');
    });

    var e = new Date,
        a = new Date(e.getFullYear(), e.getMonth(), e.getDate() - 1, 0, 0, 0, 0);
    $("#startDate").on("click touch", function(e) {
        $("#dp4").trigger("click")
    }), $("#endDate").on("click touch", function(e) {
        $("#dp5").trigger("click")
    }), $(".startDate").on("click touch", function(e) {
        $("#dp4").trigger("click")
    }), $(".endDate").on("click touch", function(e) {
        $("#dp5").trigger("click")
    });
    $("#dp4").fdatepicker({
        language: "pt-br",
        format: "dd/mm/yyyy",
        onRender: function(e) {
            return e.valueOf() < a.valueOf() ? "disabled" : ""
        }
    }).on("changeDate", function(e) {
        e.date.valueOf() > endDate.valueOf() ? swal("A data de início não pode ser maior que data de fim.", "", "warning") : ($("#alert").hide(), startDate = new Date(e.date), $("#startDate").val($("#dp4").data("date")), $(".startDate").val($("#dp4").data("date"))), $("#dp4").fdatepicker("hide")
    }), $("#dp5").fdatepicker({
        language: "pt-br",
        format: "dd/mm/yyyy",
        onRender: function(e) {
            return e.valueOf() < a.valueOf() ? "disabled" : ""
        }
    }).on("changeDate", function(e) {
        e.date.valueOf() < startDate.valueOf() ? swal("A data de fim não pode ser menor que a data de início.", "", "warning") : ($("#alert").hide(), endDate = new Date(e.date), $("#endDate").val($("#dp5").data("date")), $(".endDate").val($("#dp5").data("date"))), $("#dp5").fdatepicker("hide")
    })
}), $(document).ready(function() {
    function e() {
        function e(e) {
            var a = e.item.count - 1,
                t = Math.round(e.item.index - e.item.count / 2 - .5);
            0 > t && (t = a), t > a && (t = 0), o.find(".owl-item").removeClass("current").eq(t).addClass("current");
            var i = o.find(".owl-item.active").length - 1,
                l = o.find(".owl-item.active").first().index(),
                s = o.find(".owl-item.active").last().index();
            t > s && o.data("owl.carousel").to(t, 100, !0), l > t && o.data("owl.carousel").to(t - i, 100, !0)
        }

        function a(e) {
            if (l) {
                var a = e.item.index;
                t.data("owl.carousel").to(a, 100, !0)
            }
        }

        function e(e) {
            var a = e.item.count - 1,
                t = Math.round(e.item.index - e.item.count / 2 - .5);
            0 > t && (t = a), t > a && (t = 0), o.find(".owl-item").removeClass("current").eq(t).addClass("current");
            var i = o.find(".owl-item.active").length - 1,
                l = o.find(".owl-item.active").first().index(),
                s = o.find(".owl-item.active").last().index();
            t > s && o.data("owl.carousel").to(t, 100, !0), l > t && o.data("owl.carousel").to(t - i, 100, !0)
        }

        function a(e) {
            if (l) {
                var a = e.item.index;
                t.data("owl.carousel").to(a, 100, !0)
            }
        }

        function e(e) {
            var a = e.item.count - 1,
                t = Math.round(e.item.index - e.item.count / 2 - .5);
            0 > t && (t = a), t > a && (t = 0), o.find(".owl-item").removeClass("current").eq(t).addClass("current");
            var i = o.find(".owl-item.active").length - 1,
                l = o.find(".owl-item.active").first().index(),
                s = o.find(".owl-item.active").last().index();
            t > s && o.data("owl.carousel").to(t, 100, !0), l > t && o.data("owl.carousel").to(t - i, 100, !0)
        }

        function a(e) {
            if (l) {
                var a = e.item.index;
                t.data("owl.carousel").to(a, 100, !0)
            }
        }

        function e(e) {
            var a = e.item.count - 1,
                t = Math.round(e.item.index - e.item.count / 2 - .5);
            0 > t && (t = a), t > a && (t = 0), o.find(".owl-item").removeClass("current").eq(t).addClass("current");
            var i = o.find(".owl-item.active").length - 1,
                l = o.find(".owl-item.active").first().index(),
                s = o.find(".owl-item.active").last().index();
            t > s && o.data("owl.carousel").to(t, 100, !0), l > t && o.data("owl.carousel").to(t - i, 100, !0)
        }

        function a(e) {
            if (l) {
                var a = e.item.index;
                t.data("owl.carousel").to(a, 100, !0)
            }
        }
        if ($('[role="home"]')[0] && ($("#owl-home").owlCarousel({
                items: 1,
                margin: 1,
                nav: !0,
                dots: !0,
                autoHeight: true,
                autoplay: !0,
                autoplayTimeout: 20000,
                autoplayHoverPause: !0,
                navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
                loop: !0
            }), $(".owl-promocao").owlCarousel({
                items: 1,
                margin: 1,
                nav: !1,
                dots: !0,
                autoplay: !0,
                autoplayTimeout: 6e3,
                autoplayHoverPause: !0,
                navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
                loop: !0
            })), $('[role="sobre-nos"]')[0]) {
            var t = $("#sync1"),
                o = $("#sync2"),
                i = 4,
                l = !0;
            t.owlCarousel({
                items: 1,
                slideSpeed: 2e3,
                nav: !0,
                autoplay: !0,
                dots: !1,
                loop: !0,
                responsiveRefreshRate: 200,
                navText: ['<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>', '<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>']
            }).on("changed.owl.carousel", e), o.on("initialized.owl.carousel", function() {
                o.find(".owl-item").eq(0).addClass("current")
            }).owlCarousel({
                items: i,
                dots: !1,
                nav: !1,
                smartSpeed: 200,
                slideSpeed: 500,
                slideBy: i,
                responsiveRefreshRate: 100,
                responsive: {
                    0: {
                        items: 3
                    },
                    480: {
                        items: 3
                    },
                    768: {
                        items: 4
                    },
                    1024: {
                        items: 4
                    }
                }
            }).on("changed.owl.carousel", a), o.on("click", ".owl-item", function(e) {
                e.preventDefault();
                var a = $(this).index();
                t.data("owl.carousel").to(a, 300, !0)
            })
        }
        if ($('[role="locacao"]')[0]) {
            var t = $("#sync1"),
                o = $("#sync2"),
                i = 4,
                l = !0;
            t.owlCarousel({
                items: 1,
                slideSpeed: 2e3,
                nav: !0,
                autoplay: !0,
                dots: !1,
                loop: !0,
                responsiveRefreshRate: 200,
                navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
            }).on("changed.owl.carousel", e), o.on("initialized.owl.carousel", function() {
                o.find(".owl-item").eq(0).addClass("current")
            }).owlCarousel({
                items: i,
                dots: !1,
                nav: !1,
                smartSpeed: 200,
                slideSpeed: 500,
                slideBy: i,
                responsiveRefreshRate: 100,
                responsive: {
                    0: {
                        items: 3
                    },
                    480: {
                        items: 3
                    },
                    768: {
                        items: 4
                    },
                    1024: {
                        items: 4
                    }
                }
            }).on("changed.owl.carousel", a), o.on("click", ".owl-item", function(e) {
                e.preventDefault();
                var a = $(this).index();
                t.data("owl.carousel").to(a, 300, !0)
            })
        }
        if ($('[role="case"]')[0]) {
            var t = $("#sync1"),
                o = $("#sync2"),
                i = 4,
                l = !0;
            t.owlCarousel({
                items: 1,
                slideSpeed: 2e3,
                nav: !0,
                autoplay: !0,
                dots: !1,
                loop: !0,
                responsiveRefreshRate: 200,
                navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
            }).on("changed.owl.carousel", e), o.on("initialized.owl.carousel", function() {
                o.find(".owl-item").eq(0).addClass("current")
            }).owlCarousel({
                items: i,
                dots: !1,
                nav: !1,
                smartSpeed: 200,
                slideSpeed: 500,
                slideBy: i,
                responsiveRefreshRate: 100,
                responsive: {
                    0: {
                        items: 3
                    },
                    480: {
                        items: 3
                    },
                    768: {
                        items: 4
                    },
                    1024: {
                        items: 4
                    }
                }
            }).on("changed.owl.carousel", a), o.on("click", ".owl-item", function(e) {
                e.preventDefault();
                var a = $(this).index();
                t.data("owl.carousel").to(a, 300, !0)
            })
        }
        if ($('[role="produto"]')[0]) {
            $(".owl").owlCarousel({
                items: 1,
                margin: 1,
                nav: !1,
                dots: !0,
                autoplay: !0,
                autoplayTimeout: 6e3,
                autoplayHoverPause: !0,
                navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
                loop: !0
            });
            var t = $("#sync1"),
                o = $("#sync2"),
                i = 4,
                l = !0;
            t.owlCarousel({
                items: 1,
                slideSpeed: 2e3,
                nav: !0,
                autoplay: !0,
                dots: !1,
                loop: !0,
                responsiveRefreshRate: 200,
                navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
            }).on("changed.owl.carousel", e), o.on("initialized.owl.carousel", function() {
                o.find(".owl-item").eq(0).addClass("current")
            }).owlCarousel({
                items: i,
                dots: !0,
                nav: !1,
                smartSpeed: 200,
                slideSpeed: 500,
                slideBy: i,
                responsiveRefreshRate: 100,
                responsive: {
                    0: {
                        items: 3
                    },
                    480: {
                        items: 3
                    },
                    768: {
                        items: 4
                    },
                    1024: {
                        items: 4
                    }
                }
            }).on("changed.owl.carousel", a), o.on("click", ".owl-item", function(e) {
                e.preventDefault();
                var a = $(this).index();
                t.data("owl.carousel").to(a, 300, !0)
            })
        }
        $('[role="orcamento"]')[0] && $("#owl-depoimentos").owlCarousel({
            items: 1,
            margin: 1,
            nav: !1,
            dots: !0,
            autoplay: !0,
            autoplayTimeout: 6e3,
            autoplayHoverPause: !0,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            loop: !1
        }), $('[role="fale-conosco"]')[0] && $("#owl-depoimentos").owlCarousel({
            items: 1,
            margin: 1,
            nav: !1,
            dots: !0,
            autoplay: !0,
            autoplayTimeout: 6e3,
            autoplayHoverPause: !0,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            loop: !1
        })
    }

    function a() {
        $("input.horario").mask("99:99", {
            clearIfNotMatch: !0
        }), $("input.cep").mask("99999-999", {
            clearIfNotMatch: !0
        }), $("input.telefone").mask("(99) 9999-9999", {
            clearIfNotMatch: !0
        }), $("input.cpf").mask("999.999.999-99", {
            clearIfNotMatch: !0
        }), $("input.cnpj").mask("99.999.999/9999-99", {
            clearIfNotMatch: !0
        }), $("input.horario").mask("99:99", {
            clearIfNotMatch: !0
        }), $("input.cep").mask("99999-999", {
            clearIfNotMatch: !0
        }), $("input.data").mask("99/99/9999", {
            clearIfNotMatch: !0
        });
        var e = function(e) {
                return 11 === e.replace(/\D/g, "").length ? "(00) 00000-0000" : "(00) 0000-00009"
            },
            a = {
                clearIfNotMatch: !0,
                onKeyPress: function(a, t, o, i) {
                    o.mask(e.apply({}, arguments), i)
                }
            };
        $("input.celular").mask(e, a), $("input.data").mask("99/99/9999", {
            clearIfNotMatch: !0
        })
    }
    $(function() {
        $('a[href*="#"]:not([href="#"])').click(function() {
            if (console.log("clicked"), location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
                var e = $(this.hash);
                if (e = e.length ? e : $("[name=" + this.hash.slice(1) + "]"), e.length) return $("html, body").animate({
                    scrollTop: e.offset().top - 105
                }, 1e3), !1
            }
        })
    }), $(".swal2-close").on("click touch", function(e) {
        e.preventDefault()
    }), $(".owl-carousel")[0] && Modernizr.load([{
        load: [$baseUrl + "assets/bower_components/owl.carousel/dist/owl.carousel.min.js", $baseUrl + "assets/bower_components/owl.carousel/dist/assets/owl.carousel.min.css", $baseUrl + "assets/bower_components/owl.carousel/dist/assets/owl.theme.default.css"],
        complete: function() {
            e()
        }
    }]), $("select.estado")[0] && ($estado = $("select.estado"), $cidade = $("select.cidade"), $estado.attr("data-value") ? $.get($baseUrl + "get-estados", function(e) {
        $estado.html(e), $estado.val($estado.attr("data-value")), $.get($baseUrl + "get-cidades", {
            sigla: $estado.attr("data-value")
        }).done(function(e) {
            $cidade.prop("disabled", !1).html(e), $cidade.val($cidade.attr("data-value"))
        })
    }) : $.get($baseUrl + "get-estados", function(e) {
        $estado.html(e)
    }), $estado.change(function() {
        $this = $(this), $cidade.prop("disabled", !0), "" != $this.val() ? $.get($baseUrl + "get-cidades", {
            sigla: $this.val()
        }).done(function(e) {
            $cidade.prop("disabled", !1).html(e)
        }).fail(function(e, a, t) {}) : $cidade.html('<option value="">Selecione a cidade</option>').attr("disabled", !0)
    })), ($(".data")[0] || $(".celular")[0] || $(".telefone")[0] || $(".horario")[0]) && Modernizr.load([{
        load: [$baseUrl + "assets/plugins/jquery.mask/jquery.mask.min.js"],
        complete: function() {
            a()
        }
    }]), $(".maps")[0] && yepnope([{
        load: "https://www.google.com/jsapi",
        callback: function() {
            google.load("maps", "3", {
                callback: function() {
                    $(".maps").each(function(e, a) {
                        $image = $(this).attr("image"), $x = $(this).attr("x"), $y = $(this).attr("y"), $z = $(this).attr("z");
                        var t = new google.maps.LatLng(parseFloat($x), parseFloat($y)),
                            o = $(document).width() > 1024 ? !0 : !1,
                            i = {
                                zoom: parseFloat($z),
                                center: t,
                                scrollwheel: !1,
                                mapTypeId: google.maps.MapTypeId.ROADMAP,
                                disableDefaultUI: !1,
                                mapTypeControl: !1,
                                zoomControl: !0,
                                streetViewControl: !1,
                                draggable: o,
                                zoomControlOptions: {
                                    style: google.maps.ZoomControlStyle.SMALL
                                }
                            },
                            l = new google.maps.Map(a, i);
                        new google.maps.Marker({
                            position: t,
                            map: l,
                            icon: $image
                        })
                    })
                },
                other_params: "sensor=false&key=AIzaSyCpxcEaUOo-5GhE7juaUPnYJgldK6eLtGQ"
            })
        }
    }]), $('[role="trabalhe-conosco"]')[0] && (yepnope([{
        load: [$baseUrl + "assets/js/jquery-ui-1.10.4.custom.min.js"]
    }]), $(".listagem li .cell").bind("click touch", function() {
        $(this).parent().hasClass("active") || $(this).hasClass("header") ? $(this).parent().hasClass("header") || $(this).parent().removeClass("active").find(".field").slideToggle(300) : $(this).parent().addClass("active").find(".field").slideToggle(300)
    }), $("table tbody tr").bind("click touch", function() {
        $(this).hasClass("active") || $(this).hasClass("header") ? $(this).hasClass("header") || ($(this).removeClass("active").parent().find(".field").fadeOut(300), $("table tbody").removeClass("active")) : ($(this).addClass("active").parent().find(".field").fadeIn(300), $("table tbody").addClass("active"))
    })), $('[role="produto"]')[0] && yepnope([{
        load: [$baseUrl + "assets/js/jquery-ui-1.10.4.custom.min.js"]
    }]), $('[role="orcamento"]')[0] && ($("#pessoa").change(function() {
        "Pessoa Física" == $(this).val() && $("#nome").closest(".row").fadeOut(), "Pessoa Jurídica" == $(this).val() && $("#nome").closest(".row").fadeIn()
    }), $("#pessoa").trigger("change")), $('[role="simulador"]')[0] && ($("a.toggle").bind("click touch", function() {
        return $(this).parent(".produto").parent().toggleClass("active"), !1
    }), $(".step").each(function(e, a) {
        return $(a).not(".active").addClass("done"), $(".done").html('<i class="fa fa-check"></i>'), $(this).is(".active") ? !1 : void 0
    }), console.log("simulador"))
});
