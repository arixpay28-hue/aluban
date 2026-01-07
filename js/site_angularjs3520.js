var app = angular.module(
  "foundationRaddar",
  [
    "mm.foundation",
    "ngAnimate",
    "ngMap",
    "slickCarousel",
    "ngFileUpload",
    "ngCookies",
  ],
  function ($httpProvider) {
    FastClick.attach(document.body);
    delete $httpProvider.defaults.headers.common["X-Requested-With"];
    // Use x-www-form-urlencoded Content-Type
    $httpProvider.defaults.headers.post["Content-Type"] =
      "application/x-www-form-urlencoded;charset=utf-8";

    /**
     * The workhorse; converts an object to x-www-form-urlencoded serialization.
     * @param {Object} obj
     * @return {String}
     */
    var param = function (obj) {
      var query = "",
        name,
        value,
        fullSubName,
        subName,
        subValue,
        innerObj,
        i;

      for (name in obj) {
        value = obj[name];

        if (value instanceof Array) {
          for (i = 0; i < value.length; ++i) {
            subValue = value[i];
            fullSubName = name + "[" + i + "]";
            innerObj = {};
            innerObj[fullSubName] = subValue;
            query += param(innerObj) + "&";
          }
        } else if (value instanceof Object) {
          for (subName in value) {
            subValue = value[subName];
            fullSubName = name + "[" + subName + "]";
            innerObj = {};
            innerObj[fullSubName] = subValue;
            query += param(innerObj) + "&";
          }
        } else if (value !== undefined && value !== null)
          query +=
            encodeURIComponent(name) + "=" + encodeURIComponent(value) + "&";
      }

      return query.length ? query.substr(0, query.length - 1) : query;
    };

    // Override $http service's default transformRequest
    $httpProvider.defaults.transformRequest = [
      function (data) {
        return angular.isObject(data) && String(data) !== "[object File]"
          ? param(data)
          : data;
      },
    ];
  }
);
app.controller(
  "pop",
  function ($scope, $http, $document, $modal, orderByFilter) {
    var elem = new Foundation.Reveal($("#modalPopup"));
    elem.open();
  }
);

app.controller(
  "MainCtrl",
  function (
    $scope,
    $http,
    $document,
    $modal,
    orderByFilter,
    $timeout,
    NgMap,
    Upload,
    $cookies
  ) {
    // ===========================================
    // << INÍCIO DA CORREÇÃO DE IDIOMA >>
    // Força o idioma para PT-BR e tenta limpar chaves de idioma antigas.
    // O nome da chave ('lang' ou 'locale') é uma estimativa,
    // mas esta linha deve resolver se for via cookie:
    $cookies.put("lang", "pt-br", { path: "/" });
    $cookies.put("locale", "pt-br", { path: "/" });
    $cookies.put("NG_TRANSLATE_LANG_KEY", "pt-br", { path: "/" });

    // Garante que o Angular use PT-BR (para outros mecanismos de i18n)
    if (window.localStorage) {
      localStorage.setItem("lang", "pt-br");
      localStorage.setItem("locale", "pt-br");
    }
    // << FIM DA CORREÇÃO DE IDIOMA >>
    // ===========================================

    // =====================================================================================================================|
    //  POPUP EDITÁVEL - MODAL  -   DANILO FERNANDO -   (62)98250-4830  -   eng.danilofernando@gmail.com
    // ... restante do seu código ...

    /*  Abrir Popup */
    $scope.abrirPopUp = function () {
      /*  Caso não tenha cookies no navegador abri popup */
      if (!window.sessionStorage.getItem("poup-cache")) {
        $scope.popupSite = true;
      }
    };

    /*  Fechar Popup*/
    $scope.fecharPopUp = function () {
      // window.sessionStorage.setItem('poup-cache', true);
      $scope.popupSite = false;
    };

    /*  Abrir Popup 2 */
    $scope.abrirPopUpTrenheira = function () {
      /*  Caso não tenha cookies no navegador abri popup */
      if (!window.sessionStorage.getItem("poup-trenheira")) {
        $scope.exibirTrenheira = true;
      }
    };

    /*  Fechar Popup 2*/
    $scope.fecharPopUpTrenheira = function (funcao = null) {
      window.sessionStorage.setItem("poup-trenheira", true);
      $scope.exibirTrenheira = !$scope.exibirTrenheira;
      if (funcao) {
        if (funcao == "televendas") {
          $("#tela-televendas").toggleClass("visivel");
        }

        if (funcao == "chat") {
          $(".zopim").show();
          $zopim(function () {
            $zopim.livechat.window.show();
          });
        }
      }
    };

    // =====================================================================================================================|

    // console.log($(".contagem-regressiva").attr('data-time'));
    $(".contagem-regressiva").countdown(
      $(".contagem-regressiva").attr("data-time"),
      function (event) {
        $(".data").text(event.strftime("%D"));
        // var totalHours = event.offset.totalDays * 24 + event.offset.hours;
        // $('.hora').html(event.strftime(totalHours + ':%M:%S'));
        $(".hora").text(event.strftime("%D dias %Hh %M min %Ss"));
      }
    );

    $(".black-friday").countdown(
      $(".black-friday").attr("data-time"),
      function (event) {
        var totalHours = event.offset.totalDays * 24 + event.offset.hours;
        // $('.hora').html(event.strftime(totalHours + ':%M:%S'));
        $(".contagem-promo.horas").text(event.strftime(totalHours + ""));
        $(".contagem-promo.minutos").text(event.strftime("%M"));
        $(".contagem-promo.segundos").text(event.strftime("%S"));
      }
    );

    $scope.registrarZap = function (numero) {
      if (numero) {
        urlzap = $baseUrl + "registrar-whatsapp/" + numero;
        $http.get(urlzap).then(
          function (response) {
            console.log("Registrado");
          },
          function (response) {
            console.log("Registro não efetuado");
          }
        );
      }
    };

    $scope.IsVisible = false;

    $scope.ShowHide = function () {
      $scope.IsVisible = $scope.IsVisible ? false : true;
    };

    $scope.uploadFiles = function (file, errFiles) {
      $scope.f = file;
      $scope.errFile = errFiles && errFiles[0];
      if (file) {
        file.upload = Upload.upload({
          url: $baseUrl + "upload",
          data: { file: file },
        });

        file.upload.then(
          function (response) {
            console.log(response);
            $timeout(function () {
              file.result = response.data;
              $scope.form.curriculo = response.data;
            });
          },
          function (response) {
            if (response.status > 0)
              $scope.errorMsg = response.status + ": " + response.data;
          },
          function (evt) {
            file.progress = Math.min(
              100,
              parseInt((100.0 * evt.loaded) / evt.total)
            );
          }
        );
      }
    };

    NgMap.getMap("map1").then(function (map) {
      var center = map.getCenter();
      google.maps.event.trigger(map, "resize");
      map.setCenter(center);
    });

    $(".map2").on("click touch tap", function (event) {
      event.preventDefault();
      /* Act on the event */
      console.log("mapa2");
      NgMap.getMap("map2").then(function (map) {
        var center = map.getCenter();
        google.maps.event.trigger(map, "resize");
        map.setCenter(center);
      });
    });

    if ($(this).attr("href") == "#tab2") {
      var center = map.getCenter();
      google.maps.event.trigger(map, "resize");
      map.setCenter(center);
    }

    $scope.form = {};
    $scope.submit_inscrito = function ($event) {
      $event.preventDefault();
      $.post(
        $baseUrl + "gravar-inscrito",
        { email: $scope.newsletter },
        function (data, textStatus, xhr) {
          if (data === "true") {
            console.log("true");
            swal("Email cadastrado com sucesso!", "", "success");
          } else {
            swal(
              "Por favor, preencha um endereço de e-mail válido ",
              "",
              "warning"
            );
          }
        }
      );
    };

    // /* FORMULÁRIO */
    // $timeout(function () {
    //     $scope.form = {produto: ''};
    // }, 200);

    $scope.submit = function () {
      $(document)
        .on("invalid.zf.abide", function (ev, elem) {
          console.log("Field id " + ev.target.id + " is invalid");
          $timeout(function () {
            $(".abide").fadeOut();
          }, 4000);
        })
        .on("valid.zf.abide", function (ev, elem) {
          console.log("Field name " + elem.attr("name") + " is valid");
        })
        .on("forminvalid.zf.abide", function (ev, frm) {
          console.log("Form id " + ev.target.id + " is invalid");
        })
        .on("formvalid.zf.abide", function (ev, frm) {
          console.log("Form id " + frm.attr("id") + " is valid");
        })
        .on("submit", function (ev, frm) {
          if ($scope.carregando) return;

          ev.preventDefault();

          $scope.carregando = true;
          $scope.$apply();

          $scope.form.id = ev.target.id;
          $scope.form.name = ev.target.name;
          $scope.form.page = ev.target.attributes["page"].value;
          $scope.form.subject = ev.target.attributes["subject"].value;

          $("#" + ev.target.id)
            .find('[type="submit"]')
            .attr("disabled", true)
            .find("i")
            .removeClass("fa fa-check")
            .addClass("fa fa-refresh fa-spin fa-fw");

          $http
            .post($baseUrl + "process-form", {
              data: $scope.form,
            })
            .success(function (data, status, headers, config) {
              window.location.href =
                $baseUrl + "formulario-enviado?path=" + $scope.form.name;
            })
            .error(function (data, status, headers, config) {
              $("#" + ev.target.id)
                .find('[type="submit"]')
                .attr("disabled", false)
                .find("i")
                .removeClass("fa fa-refresh fa-spin fa-fw")
                .addClass("fa fa-check");
              $scope.carregando = false;
              alert("Não foi possível enviar sua mensagem!");
            });
        });
    };

    $scope.page = 1;
    $scope.noticias = [];
    /*==============================================
    =            CARREGAR MAIS NOTÍCIAS            =
    ==============================================*/
    $scope.load = function () {
      $.get(
        $baseUrl + "get-noticias/pagina/" + ($scope.page + 1),
        function (data) {
          /*optional stuff to do after success */
          if (data != 0) {
            console.log(data);
            $("#loading-svg").fadeIn(100);
            $("span.label").html("Carregando mais noticias");
            $.each(data, function (index, val) {
              setTimeout(function () {
                $scope.noticias.push(val);
                $scope.$apply();
              }, 1000);
            });

            $scope.page++;
          } else {
            $("button.ngrp").replaceWith(
              '<div class="row"><div class="large-6 large-offset-3 columns"><div class="panel"><h5>Que pena! Não existem mais informativos para carregar :(</h5><p>Mas continue navegando. Já acessou nossas promoções? Confira! <a href="/promocoes">clique aqui</a></p></div></div></div>'
            );
          }
        }
      )
        .promise()
        .done(function () {
          setTimeout(function () {
            $("#loading-svg").fadeOut(300);
            $("span.label").html("Carregar mais");
          }, 2000);
        });
    };

    /*=====  End of CARREGAR MAIS NOTÍCIAS  ======*/
    /* DUVIDAS FREQUENTES */
    $timeout(function () {
      $scope.relacionada = "all";
    }, 500);

    /*===============================
    =            PRODUTO            =
    ===============================*/
    if ($('[role="produto"]')[0]) {
      $scope.produtosImagens = [];

      $scope.produto = {};
      $scope.produto.medida = 0;
      $scope.produto.cor = 0;
      $scope.produto.medidas = [];
      $scope.produto.cores = [];
      $scope.produto.numberLoaded = false;

      $scope.produto.updateSlide = function () {
        var selected = false;

        $scope.produtosImagens.forEach(function (item, index) {
          if (selected) {
            return;
          }

          if (
            typeof $scope.produto.medida !== "undefined" &&
            typeof item.medida.id !== "undefined"
          ) {
            if ($scope.produto.medida !== item.medida.id) {
              return;
            }
          }

          if (
            typeof $scope.produto.cor !== "undefined" &&
            typeof item.cor.id !== "undefined"
          ) {
            if ($scope.produto.cor !== item.cor.id) {
              return;
            }
          }

          $("slick").slick("slickGoTo", index);
          selected = true;
        });
      };

      $scope.produto.insertVar = function (data) {
        data.dataset.produtos.forEach(function (item, index) {
          item.imagens.forEach(function (itemImagem, indexImagem) {
            var label = item.label;

            if (item.medida.label) {
              label += " - " + item.medida.label;
            }

            if (item.cor.label) {
              label += " - " + item.cor.label;
            }

            if (itemImagem.label) {
              label += " - " + itemImagem.label;
            }

            $scope.produtosImagens.push({
              label: label,
              src: itemImagem.src,
              cor: item.cor,
              medida: item.medida,
            });
          });
        });

        if (!$scope.produtosImagens.length) {
          return;
        }

        $scope.produto.medida = $scope.produtosImagens[0].medida.id;
        $scope.produto.cor = $scope.produtosImagens[0].cor.id;

        if (data.dataset.medidas) {
          $scope.produto.medidas = data.dataset.medidas;
        }

        if (data.dataset.cores) {
          $scope.produto.cores = data.dataset.cores;
        }

        $scope.produto.numberLoaded = true;
        $scope.produto.updateSlide();
      };

      // $scope.produto.getData();
      // $scope.produto.insertVar(JSON.parse(jsonAngular));

      (function () {
        try {
          var parsed = JSON.parse(jsonAngular);
          var pageUriEl = document.getElementById("uri");
          var pageUri = pageUriEl ? pageUriEl.value : null;
          if (
            parsed &&
            parsed.modelo &&
            pageUri &&
            parsed.modelo.uri !== pageUri &&
            parsed.dataset &&
            parsed.dataset.produtos
          ) {
            parsed.dataset.produtos = parsed.dataset.produtos.filter(function (
              item
            ) {
              return (
                item.label &&
                item.label
                  .toLowerCase()
                  .indexOf(parsed.modelo.titulo.toLowerCase()) !== -1
              );
            });
          }
          $scope.produto.insertVar(parsed);
        } catch (e) {
          // fallback para compatibilidade
          $scope.produto.insertVar(JSON.parse(jsonAngular));
        }
      })();

      $scope.produto.slickConfig = {
        initialSlide: 0,
        enabled: true,
        autoplay: false,
        draggable: true,
        adaptiveHeight: false,
        arrows: true,
        fade: true,
        method: {},
        event: {
          afterChange: function (event, slick, currentSlide, nextSlide) {
            $scope.produto.setProduto(currentSlide);
          },
        },
      };

      $scope.produto.slickConfigThumb = {
        enabled: true,
        autoplay: false,
        draggable: true,
        adaptiveHeight: false,
        arrows: true,
        fade: false,
        slidesToShow: 4,
        slidesToScroll: 1,
      };

      $scope.produto.setMedida = function (medida) {
        $scope.produto.medida = medida;
        $scope.produto.updateSlide();
      };
      $scope.produto.setCor = function (cor) {
        $scope.produto.cor = cor.id;
        $scope.produto.updateSlide();
      };
      $scope.produto.setProduto = function (produto) {
        $scope.produto.cor = $scope.produtosImagens[produto].cor.id;
        $scope.produto.medida = $scope.produtosImagens[produto].medida.id;
        $("slick").slick("slickGoTo", produto);
        //$scope.produto.updateSlide();
      };
    }
    /*=====  End of PRODUTO  ======*/
    /*=================================
    =            SIMULADOR            =
    =================================*/
    if ($('[role="monte-sua-tenda"]')[0]) {
      $scope.tenda = {};
      $scope.step = $("#step").val();

      $scope.$watchCollection("tenda", function () {
        $http
          .post($baseUrl + "machine-state", {
            step: $scope.step,
          })
          .success(function (data, status, headers, config) {
            console.log(data);
            $scope.steps = data.steps;
          })
          .error(function (data, status, headers, config) {
            console.log("error: " + data);
          });
      });

      $scope.setType = function (tipo) {
        $scope.tenda.tipo = tipo;
        $(".produtos").removeClass("active");
        $("." + tipo).addClass("active");
        this.saveSession();
      };

      $scope.setTecido = function (tipo) {
        console.log(tipo);
        $scope.tenda.tecido = tipo;
        this.saveSession();
      };

      $scope.saveSession = function () {
        $http
          .post($baseUrl + "save-session", {
            data: $scope.tenda,
          })
          .success(function (data, status, headers, config) {
            console.log(data);
          })
          .error(function (data, status, headers, config) {
            console.log("error: " + data);
          });
      };

      $timeout(function () {
        $scope.tenda = {};
        $http
          .post($baseUrl + "save-session", {
            data: tenda,
          })
          .success(function (data, status, headers, config) {
            $scope.tenda = data;
          })
          .error(function (data, status, headers, config) {
            console.log("error: " + data);
          });
      }, 300);
    }
    /*=====  End of SIMULADOR  ======*/

    if (typeof jsonLocacao !== "undefined") {
      $scope.locacao = JSON.parse(jsonLocacao);

      $scope.setLocacao = function (index) {
        $("slick").slick("slickGoTo", index);
      };

      $scope.slickConfigThumb = {
        enabled: true,
        autoplay: false,
        draggable: true,
        adaptiveHeight: false,
        arrows: true,
        fade: false,
        slidesToShow: 4,
        slidesToScroll: 1,
      };

      $scope.slickConfig = {
        initialSlide: 0,
        enabled: true,
        autoplay: false,
        draggable: true,
        adaptiveHeight: false,
        arrows: true,
        fade: true,
        method: {},
        event: {
          afterChange: function (event, slick, currentSlide, nextSlide) {
            $scope.setLocacao(currentSlide);
          },
        },
      };
    }
  }
);
app.controller(
  "formulario-enviado",
  function ($scope, $http, $document, $modal, orderByFilter) {}
);

angular
  .module("foundationRaddar")
  .controller("AccordionDemoCtrl", function ($scope) {
    $scope.oneAtATime = true;

    $scope.groups = [
      {
        title: "Dynamic Group Header - 1",
        content: "Dynamic Group Body - 1",
        content: "Dynamic Group Body - 1",
      },
      {
        title: "Dynamic Group Header - 2",
        content: "Dynamic Group Body - 2",
      },
    ];

    $scope.items = ["Item 1", "Item 2", "Item 3"];

    $scope.addItem = function () {
      var newItemNo = $scope.items.length + 1;
      $scope.items.push("Item " + newItemNo);
    };
  });

angular
  .module("foundationRaddar")
  .controller("ModalDemoCtrl", function ($scope, $modal, $log) {
    $scope.open = open;

    function open(size, backdrop, itemCount, closeOnClick) {
      $scope.items = [];

      var count = itemCount || 3;

      for (var i = 0; i < count; i++) {
        $scope.items.push("item " + i);
      }

      var params = {
        templateUrl: "myModalContent.html",
        resolve: {
          items: function () {
            return $scope.items;
          },
        },
        controller: function ($scope, $modalInstance, items) {
          $scope.items = items;
          $scope.selected = {
            item: $scope.items[0],
          };

          $scope.reposition = function () {
            $modalInstance.reposition();
          };

          $scope.ok = function () {
            $modalInstance.close($scope.selected.item);
          };

          $scope.cancel = function () {
            $modalInstance.dismiss("cancel");
          };

          $scope.openNested = function () {
            open();
          };
        },
      };

      if (angular.isDefined(closeOnClick)) {
        params.closeOnClick = closeOnClick;
      }

      if (angular.isDefined(size)) {
        params.size = size;
      }

      if (angular.isDefined(backdrop)) {
        params.backdrop = backdrop;
      }

      var modalInstance = $modal.open(params);

      modalInstance.result.then(
        function (selectedItem) {
          $scope.selected = selectedItem;
        },
        function () {
          $log.info("Modal dismissed at: " + new Date());
        }
      );
    }
  });
