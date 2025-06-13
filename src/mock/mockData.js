const mockData = [ 
    {//pal vs porto
        linkMatch: 'https://www.espn.com.co/futbol/numeritos/_/juegoId/724426',
        infoMatch: {
  "equipoA": [
    {
      "miEquipo": {
        "nombre": "PAL",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/2029.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 1,
        "disparoAGol": "5",
        "tirosRealizados": "18",
        "faltas": "13",
        "tarjetasAmarillas": "3",
        "tarjetasRojas": "0",
        "tirosEsquina": "13",
        "salvadas": "1",
        "anotaciones": [
          {
            "nombre": "Allan Andrade",
            "minuto": "87'"
          }
        ]
      },
      "adversario": {
        "nombre": "CRU",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/2022.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 2,
        "disparoAGol": "3",
        "tirosRealizados": "14",
        "faltas": "17",
        "tarjetasAmarillas": "3",
        "tarjetasRojas": "0",
        "tirosEsquina": "5",
        "salvadas": "4",
        "anotaciones": [
          {
            "nombre": "Kaio Jorge",
            "minuto": "2'"
          },
          {
            "nombre": "Kaio Jorge",
            "minuto": "4'"
          }
        ]
      }
    },
    {
      "miEquipo": {
        "nombre": "PAL",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/2029.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 6,
        "disparoAGol": "12",
        "tirosRealizados": "21",
        "faltas": "6",
        "tarjetasAmarillas": "2",
        "tarjetasRojas": "0",
        "tirosEsquina": "5",
        "salvadas": "1",
        "anotaciones": [
          {
            "nombre": "Estêvão",
            "minuto": "32'"
          },
          {
            "nombre": "José López",
            "minuto": "39'"
          },
          {
            "nombre": "José López",
            "minuto": "45'+2'"
          },
          {
            "nombre": "Raphael Veiga",
            "minuto": "64'"
          },
          {
            "nombre": "Paulinho",
            "minuto": "71'"
          },
          {
            "nombre": "Facundo Torres",
            "minuto": "80'"
          }
        ]
      },
      "adversario": {
        "nombre": "SCR",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/2673.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "1",
        "tirosRealizados": "6",
        "faltas": "14",
        "tarjetasAmarillas": "3",
        "tarjetasRojas": "0",
        "tirosEsquina": "5",
        "salvadas": "6",
        "anotaciones": []
      }
    },
    {
      "miEquipo": {
        "nombre": "PAL",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/2029.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "3",
        "tirosRealizados": "13",
        "faltas": "13",
        "tarjetasAmarillas": "4",
        "tarjetasRojas": "0",
        "tirosEsquina": "3",
        "salvadas": "1",
        "anotaciones": []
      },
      "adversario": {
        "nombre": "FLA",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/819.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 2,
        "disparoAGol": "3",
        "tirosRealizados": "7",
        "faltas": "18",
        "tarjetasAmarillas": "2",
        "tarjetasRojas": "0",
        "tirosEsquina": "3",
        "salvadas": "3",
        "anotaciones": [
          {
            "nombre": "Giorgian de Arrascaeta",
            "minuto": "73' Pen"
          },
          {
            "nombre": "Ayrton Lucas",
            "minuto": "87'"
          }
        ]
      }
    },
    {
      "miEquipo": {
        "nombre": "PAL",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/2029.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 3,
        "disparoAGol": "8",
        "tirosRealizados": "19",
        "faltas": "6",
        "tarjetasAmarillas": "0",
        "tarjetasRojas": "0",
        "tirosEsquina": "8",
        "salvadas": "0",
        "anotaciones": [
          {
            "nombre": "Estêvão",
            "minuto": "67'"
          },
          {
            "nombre": "Estêvão",
            "minuto": "69'"
          },
          {
            "nombre": "José López",
            "minuto": "87'"
          }
        ]
      },
      "adversario": {
        "nombre": "CEA",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/9969.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "0",
        "tirosRealizados": "11",
        "faltas": "11",
        "tarjetasAmarillas": "1",
        "tarjetasRojas": "0",
        "tirosEsquina": "5",
        "salvadas": "5",
        "anotaciones": []
      }
    },
    {
      "miEquipo": {
        "nombre": "PAL",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/2029.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 2,
        "disparoAGol": "5",
        "tirosRealizados": "15",
        "faltas": "12",
        "tarjetasAmarillas": "2",
        "tarjetasRojas": "0",
        "tirosEsquina": "12",
        "salvadas": "1",
        "anotaciones": [
          {
            "nombre": "Murilo",
            "minuto": "72'"
          },
          {
            "nombre": "Mauricio",
            "minuto": "78'"
          }
        ]
      },
      "adversario": {
        "nombre": "BRA",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/6079.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 1,
        "disparoAGol": "2",
        "tirosRealizados": "9",
        "faltas": "15",
        "tarjetasAmarillas": "2",
        "tarjetasRojas": "0",
        "tirosEsquina": "8",
        "salvadas": "3",
        "anotaciones": [
          {
            "nombre": "Gabriel",
            "minuto": "24'"
          }
        ]
      }
    },
    {
      "miEquipo": {
        "nombre": "PAL",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/2029.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 2,
        "disparoAGol": "9",
        "tirosRealizados": "19",
        "faltas": "8",
        "tarjetasAmarillas": "0",
        "tarjetasRojas": "0",
        "tirosEsquina": "8",
        "salvadas": "4",
        "anotaciones": [
          {
            "nombre": "Murilo",
            "minuto": "6'"
          },
          {
            "nombre": "Facundo Torres",
            "minuto": "12'"
          }
        ]
      },
      "adversario": {
        "nombre": "BOL",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/2681.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "3",
        "tirosRealizados": "5",
        "faltas": "7",
        "tarjetasAmarillas": "0",
        "tarjetasRojas": "0",
        "tirosEsquina": "4",
        "salvadas": "7",
        "anotaciones": []
      }
    },
    {
      "miEquipo": {
        "nombre": "PAL",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/2029.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 1,
        "disparoAGol": "4",
        "tirosRealizados": "17",
        "faltas": "12",
        "tarjetasAmarillas": "1",
        "tarjetasRojas": "0",
        "tirosEsquina": "10",
        "salvadas": "2",
        "anotaciones": [
          {
            "nombre": "Vitor Roque",
            "minuto": "90'+5'"
          }
        ]
      },
      "adversario": {
        "nombre": "SAO",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/2026.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "2",
        "tirosRealizados": "6",
        "faltas": "16",
        "tarjetasAmarillas": "2",
        "tarjetasRojas": "0",
        "tirosEsquina": "1",
        "salvadas": "3",
        "anotaciones": []
      }
    },
    {
      "miEquipo": {
        "nombre": "PAL",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/2029.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 2,
        "disparoAGol": "6",
        "tirosRealizados": "9",
        "faltas": "13",
        "tarjetasAmarillas": "3",
        "tarjetasRojas": "0",
        "tirosEsquina": "5",
        "salvadas": "2",
        "anotaciones": [
          {
            "nombre": "Estêvão",
            "minuto": "41'"
          },
          {
            "nombre": "Vitor Roque",
            "minuto": "90'+4'"
          }
        ]
      },
      "adversario": {
        "nombre": "CPT",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/2671.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "2",
        "tirosRealizados": "17",
        "faltas": "10",
        "tarjetasAmarillas": "1",
        "tarjetasRojas": "0",
        "tirosEsquina": "8",
        "salvadas": "4",
        "anotaciones": []
      }
    },
    {
      "miEquipo": {
        "nombre": "PAL",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/2029.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 1,
        "disparoAGol": "2",
        "tirosRealizados": "16",
        "faltas": "8",
        "tarjetasAmarillas": "0",
        "tarjetasRojas": "0",
        "tirosEsquina": "11",
        "salvadas": "4",
        "anotaciones": [
          {
            "nombre": "Vitor Roque",
            "minuto": "60'"
          }
        ]
      },
      "adversario": {
        "nombre": "VAS",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/3454.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "5",
        "tirosRealizados": "13",
        "faltas": "11",
        "tarjetasAmarillas": "2",
        "tarjetasRojas": "0",
        "tirosEsquina": "7",
        "salvadas": "1",
        "anotaciones": []
      }
    },
    {
      "miEquipo": {
        "nombre": "PAL",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/2029.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 1,
        "disparoAGol": "4",
        "tirosRealizados": "12",
        "faltas": "19",
        "tarjetasAmarillas": "4",
        "tarjetasRojas": "0",
        "tirosEsquina": "4",
        "salvadas": "3",
        "anotaciones": [
          {
            "nombre": "Gustavo Gómez",
            "minuto": "34'"
          }
        ]
      },
      "adversario": {
        "nombre": "CEA",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/9969.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "2",
        "tirosRealizados": "13",
        "faltas": "19",
        "tarjetasAmarillas": "3",
        "tarjetasRojas": "0",
        "tirosEsquina": "3",
        "salvadas": "3",
        "anotaciones": []
      }
    }
  ],
  "equipoB": [
    {
      "miEquipo": {
        "nombre": "POR",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/437.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 3,
        "disparoAGol": "4",
        "tirosRealizados": "10",
        "faltas": "11",
        "tarjetasAmarillas": "1",
        "tarjetasRojas": "0",
        "tirosEsquina": "2",
        "salvadas": "5",
        "anotaciones": [
          {
            "nombre": "Moura",
            "minuto": "1'"
          },
          {
            "nombre": "Samu Omorodion",
            "minuto": "69' Pen"
          },
          {
            "nombre": "Rodrigo Mora",
            "minuto": "83'"
          }
        ]
      },
      "adversario": {
        "nombre": "CDN",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/3472.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "5",
        "tirosRealizados": "11",
        "faltas": "15",
        "tarjetasAmarillas": "5",
        "tarjetasRojas": "1",
        "tirosEsquina": "8",
        "salvadas": "1",
        "anotaciones": [
          {
            "nombre": "Zé Vitor",
            "minuto": "66'"
          }
        ]
      }
    },
    {
      "miEquipo": {
        "nombre": "POR",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/437.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 2,
        "disparoAGol": "7",
        "tirosRealizados": "16",
        "faltas": "19",
        "tarjetasAmarillas": "0",
        "tarjetasRojas": "1",
        "tirosEsquina": "4",
        "salvadas": "3",
        "anotaciones": [
          {
            "nombre": "Rodrigo Mora",
            "minuto": "20'"
          },
          {
            "nombre": "Iván Marcano",
            "minuto": "25'"
          },
          {
            "nombre": "Nehuén Pérez",
            "minuto": "82'"
          }
        ]
      },
      "adversario": {
        "nombre": "BOA",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/2256.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 1,
        "disparoAGol": "4",
        "tirosRealizados": "9",
        "faltas": "13",
        "tarjetasAmarillas": "2",
        "tarjetasRojas": "1",
        "tirosEsquina": "0",
        "salvadas": "5",
        "anotaciones": [
          {
            "nombre": "Miguel Reisinho",
            "minuto": "34' Pen"
          },
          {
            "nombre": "Osman Kakay",
            "minuto": "90'+5'"
          }
        ]
      }
    },
    {
      "miEquipo": {
        "nombre": "POR",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/437.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 3,
        "disparoAGol": "4",
        "tirosRealizados": "15",
        "faltas": "14",
        "tarjetasAmarillas": "3",
        "tarjetasRojas": "0",
        "tirosEsquina": "9",
        "salvadas": "3",
        "anotaciones": [
          {
            "nombre": "Moura",
            "minuto": "40'"
          },
          {
            "nombre": "Samu Omorodion",
            "minuto": "70' Pen"
          },
          {
            "nombre": "Samu Omorodion",
            "minuto": "79'"
          }
        ]
      },
      "adversario": {
        "nombre": "MOR",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/3696.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 1,
        "disparoAGol": "4",
        "tirosRealizados": "5",
        "faltas": "12",
        "tarjetasAmarillas": "3",
        "tarjetasRojas": "0",
        "tirosEsquina": "2",
        "salvadas": "1",
        "anotaciones": [
          {
            "nombre": "Yan Maranhão",
            "minuto": "31'"
          }
        ]
      }
    },
    {
      "miEquipo": {
        "nombre": "POR",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/437.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "3",
        "tirosRealizados": "12",
        "faltas": "14",
        "tarjetasAmarillas": "3",
        "tarjetasRojas": "0",
        "tirosEsquina": "11",
        "salvadas": "2",
        "anotaciones": []
      },
      "adversario": {
        "nombre": "EST",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/21610.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 2,
        "disparoAGol": "5",
        "tirosRealizados": "11",
        "faltas": "17",
        "tarjetasAmarillas": "5",
        "tarjetasRojas": "0",
        "tirosEsquina": "5",
        "salvadas": "3",
        "anotaciones": [
          {
            "nombre": "Kikas",
            "minuto": "38'"
          },
          {
            "nombre": "Alan Ruíz",
            "minuto": "62' Pen"
          }
        ]
      }
    },
    {
      "miEquipo": {
        "nombre": "POR",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/437.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 2,
        "disparoAGol": "6",
        "tirosRealizados": "8",
        "faltas": "17",
        "tarjetasAmarillas": "2",
        "tarjetasRojas": "1",
        "tirosEsquina": "4",
        "salvadas": "3",
        "anotaciones": [
          {
            "nombre": "Rodrigo Mora",
            "minuto": "20'"
          },
          {
            "nombre": "Rodrigo Mora",
            "minuto": "57'"
          },
          {
            "nombre": "Gonçalo Borges",
            "minuto": "90'+4'"
          }
        ]
      },
      "adversario": {
        "nombre": "FAM",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/12698.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 1,
        "disparoAGol": "4",
        "tirosRealizados": "12",
        "faltas": "13",
        "tarjetasAmarillas": "3",
        "tarjetasRojas": "0",
        "tirosEsquina": "5",
        "salvadas": "4",
        "anotaciones": [
          {
            "nombre": "Pedro Bondo",
            "minuto": "82'"
          }
        ]
      }
    },
    {
      "miEquipo": {
        "nombre": "POR",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/437.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 1,
        "disparoAGol": "3",
        "tirosRealizados": "10",
        "faltas": "16",
        "tarjetasAmarillas": "2",
        "tarjetasRojas": "0",
        "tirosEsquina": "3",
        "salvadas": "2",
        "anotaciones": [
          {
            "nombre": "Rodrigo Mora",
            "minuto": "5'"
          }
        ]
      },
      "adversario": {
        "nombre": "CAS",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/21581.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "2",
        "tirosRealizados": "5",
        "faltas": "12",
        "tarjetasAmarillas": "2",
        "tarjetasRojas": "0",
        "tirosEsquina": "4",
        "salvadas": "2",
        "anotaciones": []
      }
    },
    {
      "miEquipo": {
        "nombre": "POR",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/437.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 1,
        "disparoAGol": "3",
        "tirosRealizados": "14",
        "faltas": "17",
        "tarjetasAmarillas": "3",
        "tarjetasRojas": "0",
        "tirosEsquina": "2",
        "salvadas": "1",
        "anotaciones": [
          {
            "nombre": "Samu Omorodion",
            "minuto": "81'"
          }
        ]
      },
      "adversario": {
        "nombre": "BEN",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/1929.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 4,
        "disparoAGol": "5",
        "tirosRealizados": "14",
        "faltas": "11",
        "tarjetasAmarillas": "1",
        "tarjetasRojas": "0",
        "tirosEsquina": "6",
        "salvadas": "2",
        "anotaciones": [
          {
            "nombre": "Vangelis Pavlidis",
            "minuto": "1'"
          },
          {
            "nombre": "Vangelis Pavlidis",
            "minuto": "42'"
          },
          {
            "nombre": "Vangelis Pavlidis",
            "minuto": "69'"
          },
          {
            "nombre": "Nicolás Otamendi",
            "minuto": "90'+4'"
          }
        ]
      }
    },
    {
      "miEquipo": {
        "nombre": "POR",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/437.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 2,
        "disparoAGol": "6",
        "tirosRealizados": "14",
        "faltas": "13",
        "tarjetasAmarillas": "2",
        "tarjetasRojas": "0",
        "tirosEsquina": "6",
        "salvadas": "1",
        "anotaciones": [
          {
            "nombre": "Samu Omorodion",
            "minuto": "45' Pen"
          },
          {
            "nombre": "Rodrigo Mora",
            "minuto": "64'"
          }
        ]
      },
      "adversario": {
        "nombre": "EST",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/12216.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 1,
        "disparoAGol": "2",
        "tirosRealizados": "3",
        "faltas": "19",
        "tarjetasAmarillas": "4",
        "tarjetasRojas": "0",
        "tirosEsquina": "1",
        "salvadas": "4",
        "anotaciones": [
          {
            "nombre": "Yanis Begraoui",
            "minuto": "15' Pen"
          }
        ]
      }
    },
    {
      "miEquipo": {
        "nombre": "POR",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/437.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 2,
        "disparoAGol": "10",
        "tirosRealizados": "20",
        "faltas": "19",
        "tarjetasAmarillas": "3",
        "tarjetasRojas": "0",
        "tirosEsquina": "4",
        "salvadas": "2",
        "anotaciones": [
          {
            "nombre": "Rodrigo Mora",
            "minuto": "18'"
          },
          {
            "nombre": "Fabio Vieira",
            "minuto": "61'"
          }
        ]
      },
      "adversario": {
        "nombre": "AVS",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/22064.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "2",
        "tirosRealizados": "8",
        "faltas": "8",
        "tarjetasAmarillas": "2",
        "tarjetasRojas": "1",
        "tirosEsquina": "3",
        "salvadas": "8",
        "anotaciones": [
          {
            "nombre": "Nacho Rodríguez",
            "minuto": "46'"
          }
        ]
      }
    },
    {
      "miEquipo": {
        "nombre": "POR",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/437.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "3",
        "tirosRealizados": "7",
        "faltas": "14",
        "tarjetasAmarillas": "4",
        "tarjetasRojas": "0",
        "tirosEsquina": "3",
        "salvadas": "3",
        "anotaciones": []
      },
      "adversario": {
        "nombre": "BRAG",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/2994.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 1,
        "disparoAGol": "4",
        "tirosRealizados": "7",
        "faltas": "16",
        "tarjetasAmarillas": "2",
        "tarjetasRojas": "1",
        "tirosEsquina": "7",
        "salvadas": "3",
        "anotaciones": [
          {
            "nombre": "Ricardo Horta",
            "minuto": "17'"
          },
          {
            "nombre": "Tiago Sá",
            "minuto": "90'"
          }
        ]
      }
    }
  ],
  "estadisticas": {
    "ultimos10": {
      "equipoA": {
        "goles": {
          "valores": [
            1,
            6,
            0,
            3,
            2,
            2,
            1,
            2,
            1,
            1
          ],
          "promedios": {
            "moda": 1,
            "media": 1.9,
            "mediana": 1.5
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        },
        "disparoAGol": {
          "valores": [
            5,
            12,
            3,
            8,
            5,
            9,
            4,
            6,
            2,
            4
          ],
          "promedios": {
            "moda": 4,
            "media": 5.8,
            "mediana": 5
          },
          "minimos": {
            "moda": 2,
            "media": 2,
            "mediana": 2
          }
        },
        "tirosRealizados": {
          "valores": [
            18,
            21,
            13,
            19,
            15,
            19,
            17,
            9,
            16,
            12
          ],
          "promedios": {
            "moda": 19,
            "media": 15.9,
            "mediana": 16.5
          },
          "minimos": {
            "moda": 9,
            "media": 9,
            "mediana": 9
          }
        },
        "tirosEsquina": {
          "valores": [
            13,
            5,
            3,
            8,
            12,
            8,
            10,
            5,
            11,
            4
          ],
          "promedios": {
            "moda": 5,
            "media": 7.9,
            "mediana": 8
          },
          "minimos": {
            "moda": 3,
            "media": 3,
            "mediana": 3
          }
        },
        "faltas": {
          "valores": [
            13,
            6,
            13,
            6,
            12,
            8,
            12,
            13,
            8,
            19
          ],
          "promedios": {
            "moda": 13,
            "media": 11,
            "mediana": 12
          },
          "minimos": {
            "moda": 6,
            "media": 6,
            "mediana": 6
          }
        },
        "tarjetasAmarillas": {
          "valores": [
            3,
            2,
            4,
            0,
            2,
            0,
            1,
            3,
            0,
            4
          ],
          "promedios": {
            "moda": 0,
            "media": 1.9,
            "mediana": 2
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        },
        "tarjetasRojas": {
          "valores": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
          ],
          "promedios": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        },
        "salvadas": {
          "valores": [
            1,
            1,
            1,
            0,
            1,
            4,
            2,
            2,
            4,
            3
          ],
          "promedios": {
            "moda": 1,
            "media": 1.9,
            "mediana": 1.5
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        }
      },
      "equipoB": {
        "goles": {
          "valores": [
            3,
            2,
            3,
            0,
            2,
            1,
            1,
            2,
            2,
            0
          ],
          "promedios": {
            "moda": 2,
            "media": 1.6,
            "mediana": 2
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        },
        "disparoAGol": {
          "valores": [
            4,
            7,
            4,
            3,
            6,
            3,
            3,
            6,
            10,
            3
          ],
          "promedios": {
            "moda": 3,
            "media": 4.9,
            "mediana": 4
          },
          "minimos": {
            "moda": 3,
            "media": 3,
            "mediana": 3
          }
        },
        "tirosRealizados": {
          "valores": [
            10,
            16,
            15,
            12,
            8,
            10,
            14,
            14,
            20,
            7
          ],
          "promedios": {
            "moda": 10,
            "media": 12.6,
            "mediana": 13
          },
          "minimos": {
            "moda": 7,
            "media": 7,
            "mediana": 7
          }
        },
        "tirosEsquina": {
          "valores": [
            2,
            4,
            9,
            11,
            4,
            3,
            2,
            6,
            4,
            3
          ],
          "promedios": {
            "moda": 4,
            "media": 4.8,
            "mediana": 4
          },
          "minimos": {
            "moda": 2,
            "media": 2,
            "mediana": 2
          }
        },
        "faltas": {
          "valores": [
            11,
            19,
            14,
            14,
            17,
            16,
            17,
            13,
            19,
            14
          ],
          "promedios": {
            "moda": 14,
            "media": 15.4,
            "mediana": 15
          },
          "minimos": {
            "moda": 11,
            "media": 11,
            "mediana": 11
          }
        },
        "tarjetasAmarillas": {
          "valores": [
            1,
            0,
            3,
            3,
            2,
            2,
            3,
            2,
            3,
            4
          ],
          "promedios": {
            "moda": 3,
            "media": 2.3,
            "mediana": 2.5
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        },
        "tarjetasRojas": {
          "valores": [
            0,
            1,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            0
          ],
          "promedios": {
            "moda": 0,
            "media": 0.2,
            "mediana": 0
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        },
        "salvadas": {
          "valores": [
            5,
            3,
            3,
            2,
            3,
            2,
            1,
            1,
            2,
            3
          ],
          "promedios": {
            "moda": 3,
            "media": 2.5,
            "mediana": 2.5
          },
          "minimos": {
            "moda": 1,
            "media": 1,
            "mediana": 1
          }
        }
      }
    },
    "ultimos5": {
      "equipoA": {
        "goles": {
          "valores": [
            1,
            6,
            0,
            3,
            2
          ],
          "promedios": {
            "moda": 0,
            "media": 2.4,
            "mediana": 2
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        },
        "disparoAGol": {
          "valores": [
            5,
            12,
            3,
            8,
            5
          ],
          "promedios": {
            "moda": 5,
            "media": 6.6,
            "mediana": 5
          },
          "minimos": {
            "moda": 3,
            "media": 3,
            "mediana": 3
          }
        },
        "tirosRealizados": {
          "valores": [
            18,
            21,
            13,
            19,
            15
          ],
          "promedios": {
            "moda": 13,
            "media": 17.2,
            "mediana": 18
          },
          "minimos": {
            "moda": 13,
            "media": 13,
            "mediana": 13
          }
        },
        "tirosEsquina": {
          "valores": [
            13,
            5,
            3,
            8,
            12
          ],
          "promedios": {
            "moda": 3,
            "media": 8.2,
            "mediana": 8
          },
          "minimos": {
            "moda": 3,
            "media": 3,
            "mediana": 3
          }
        },
        "faltas": {
          "valores": [
            13,
            6,
            13,
            6,
            12
          ],
          "promedios": {
            "moda": 6,
            "media": 10,
            "mediana": 12
          },
          "minimos": {
            "moda": 6,
            "media": 6,
            "mediana": 6
          }
        },
        "tarjetasAmarillas": {
          "valores": [
            3,
            2,
            4,
            0,
            2
          ],
          "promedios": {
            "moda": 2,
            "media": 2.2,
            "mediana": 2
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        },
        "tarjetasRojas": {
          "valores": [
            0,
            0,
            0,
            0,
            0
          ],
          "promedios": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        },
        "salvadas": {
          "valores": [
            1,
            1,
            1,
            0,
            1
          ],
          "promedios": {
            "moda": 1,
            "media": 0.8,
            "mediana": 1
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        }
      },
      "equipoB": {
        "goles": {
          "valores": [
            3,
            2,
            3,
            0,
            2
          ],
          "promedios": {
            "moda": 2,
            "media": 2,
            "mediana": 2
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        },
        "disparoAGol": {
          "valores": [
            4,
            7,
            4,
            3,
            6
          ],
          "promedios": {
            "moda": 4,
            "media": 4.8,
            "mediana": 4
          },
          "minimos": {
            "moda": 3,
            "media": 3,
            "mediana": 3
          }
        },
        "tirosRealizados": {
          "valores": [
            10,
            16,
            15,
            12,
            8
          ],
          "promedios": {
            "moda": 8,
            "media": 12.2,
            "mediana": 12
          },
          "minimos": {
            "moda": 8,
            "media": 8,
            "mediana": 8
          }
        },
        "tirosEsquina": {
          "valores": [
            2,
            4,
            9,
            11,
            4
          ],
          "promedios": {
            "moda": 4,
            "media": 6,
            "mediana": 4
          },
          "minimos": {
            "moda": 2,
            "media": 2,
            "mediana": 2
          }
        },
        "faltas": {
          "valores": [
            11,
            19,
            14,
            14,
            17
          ],
          "promedios": {
            "moda": 14,
            "media": 15,
            "mediana": 14
          },
          "minimos": {
            "moda": 11,
            "media": 11,
            "mediana": 11
          }
        },
        "tarjetasAmarillas": {
          "valores": [
            1,
            0,
            3,
            3,
            2
          ],
          "promedios": {
            "moda": 3,
            "media": 1.8,
            "mediana": 2
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        },
        "tarjetasRojas": {
          "valores": [
            0,
            1,
            0,
            0,
            1
          ],
          "promedios": {
            "moda": 0,
            "media": 0.4,
            "mediana": 0
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        },
        "salvadas": {
          "valores": [
            5,
            3,
            3,
            2,
            3
          ],
          "promedios": {
            "moda": 3,
            "media": 3.2,
            "mediana": 3
          },
          "minimos": {
            "moda": 2,
            "media": 2,
            "mediana": 2
          }
        }
      }
    }
  }
}
    },
    {//PSG vs ateltico
        linkMatch: 'https://www.espn.com.co/futbol/numeritos/_/juegoId/724425',
        infoMatch: {
  "equipoA": [
    {
      "miEquipo": {
        "nombre": "PSG",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/160.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 5,
        "disparoAGol": "8",
        "tirosRealizados": "23",
        "faltas": "13",
        "tarjetasAmarillas": "2",
        "tarjetasRojas": "0",
        "tirosEsquina": "4",
        "salvadas": "2",
        "anotaciones": [
          {
            "nombre": "Achraf Hakimi",
            "minuto": "12'"
          },
          {
            "nombre": "Désiré Doué",
            "minuto": "20'"
          },
          {
            "nombre": "Désiré Doué",
            "minuto": "63'"
          },
          {
            "nombre": "Khvicha Kvaratskhelia",
            "minuto": "73'"
          },
          {
            "nombre": "Senny Mayulu",
            "minuto": "86'"
          }
        ]
      },
      "adversario": {
        "nombre": "INT",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/110.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "2",
        "tirosRealizados": "8",
        "faltas": "7",
        "tarjetasAmarillas": "3",
        "tarjetasRojas": "0",
        "tirosEsquina": "6",
        "salvadas": "3",
        "anotaciones": []
      }
    },
    {
      "miEquipo": {
        "nombre": "PSG",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/160.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 3,
        "disparoAGol": "8",
        "tirosRealizados": "20",
        "faltas": "12",
        "tarjetasAmarillas": "0",
        "tarjetasRojas": "0",
        "tirosEsquina": "10",
        "salvadas": "1",
        "anotaciones": [
          {
            "nombre": "Bradley Barcola",
            "minuto": "16'"
          },
          {
            "nombre": "Bradley Barcola",
            "minuto": "19'"
          },
          {
            "nombre": "Achraf Hakimi",
            "minuto": "43'"
          }
        ]
      },
      "adversario": {
        "nombre": "REIM",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/3243.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "1",
        "tirosRealizados": "4",
        "faltas": "2",
        "tarjetasAmarillas": "0",
        "tarjetasRojas": "0",
        "tirosEsquina": "1",
        "salvadas": "5",
        "anotaciones": []
      }
    },
    {
      "miEquipo": {
        "nombre": "PSG",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/160.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 3,
        "disparoAGol": "9",
        "tirosRealizados": "21",
        "faltas": "10",
        "tarjetasAmarillas": "1",
        "tarjetasRojas": "0",
        "tirosEsquina": "5",
        "salvadas": "1",
        "anotaciones": [
          {
            "nombre": "Khvicha Kvaratskhelia",
            "minuto": "59'"
          },
          {
            "nombre": "Khvicha Kvaratskhelia",
            "minuto": "88'"
          },
          {
            "nombre": "Marquinhos",
            "minuto": "67'"
          }
        ]
      },
      "adversario": {
        "nombre": "AUX",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/172.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 1,
        "disparoAGol": "2",
        "tirosRealizados": "7",
        "faltas": "9",
        "tarjetasAmarillas": "2",
        "tarjetasRojas": "0",
        "tirosEsquina": "2",
        "salvadas": "6",
        "anotaciones": [
          {
            "nombre": "Lassine Sinayoko",
            "minuto": "30'"
          }
        ]
      }
    },
    {
      "miEquipo": {
        "nombre": "PSG",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/160.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 4,
        "disparoAGol": "8",
        "tirosRealizados": "10",
        "faltas": "11",
        "tarjetasAmarillas": "1",
        "tarjetasRojas": "0",
        "tirosEsquina": "4",
        "salvadas": "3",
        "anotaciones": [
          {
            "nombre": "Senny Mayulu",
            "minuto": "44'"
          },
          {
            "nombre": "Gonçalo Ramos",
            "minuto": "49'"
          },
          {
            "nombre": "Gonçalo Ramos",
            "minuto": "59' Pen"
          },
          {
            "nombre": "Gonçalo Ramos",
            "minuto": "65'"
          }
        ]
      },
      "adversario": {
        "nombre": "MON",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/274.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 1,
        "disparoAGol": "4",
        "tirosRealizados": "9",
        "faltas": "14",
        "tarjetasAmarillas": "1",
        "tarjetasRojas": "0",
        "tirosEsquina": "5",
        "salvadas": "4",
        "anotaciones": [
          {
            "nombre": "Tanguy Coulibaly",
            "minuto": "64'"
          }
        ]
      }
    },
    {
      "miEquipo": {
        "nombre": "PSG",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/160.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 2,
        "disparoAGol": "6",
        "tirosRealizados": "11",
        "faltas": "11",
        "tarjetasAmarillas": "2",
        "tarjetasRojas": "0",
        "tirosEsquina": "2",
        "salvadas": "3",
        "anotaciones": [
          {
            "nombre": "Fabián Ruiz",
            "minuto": "27'"
          },
          {
            "nombre": "Achraf Hakimi",
            "minuto": "72'"
          }
        ]
      },
      "adversario": {
        "nombre": "ARS",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/359.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 1,
        "disparoAGol": "4",
        "tirosRealizados": "19",
        "faltas": "11",
        "tarjetasAmarillas": "4",
        "tarjetasRojas": "0",
        "tirosEsquina": "6",
        "salvadas": "4",
        "anotaciones": [
          {
            "nombre": "Bukayo Saka",
            "minuto": "76'"
          }
        ]
      }
    },
    {
      "miEquipo": {
        "nombre": "PSG",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/160.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 1,
        "disparoAGol": "4",
        "tirosRealizados": "20",
        "faltas": "13",
        "tarjetasAmarillas": "2",
        "tarjetasRojas": "0",
        "tirosEsquina": "2",
        "salvadas": "1",
        "anotaciones": [
          {
            "nombre": "Bradley Barcola",
            "minuto": "46'"
          }
        ]
      },
      "adversario": {
        "nombre": "STR",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/180.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 2,
        "disparoAGol": "2",
        "tirosRealizados": "9",
        "faltas": "14",
        "tarjetasAmarillas": "1",
        "tarjetasRojas": "0",
        "tirosEsquina": "6",
        "salvadas": "3",
        "anotaciones": [
          {
            "nombre": "Lucas Hernández",
            "minuto": "20' EC"
          },
          {
            "nombre": "Felix Lemarechal",
            "minuto": "45'+3'"
          }
        ]
      }
    },
    {
      "miEquipo": {
        "nombre": "PSG",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/160.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 1,
        "disparoAGol": "4",
        "tirosRealizados": "11",
        "faltas": "15",
        "tarjetasAmarillas": "2",
        "tarjetasRojas": "0",
        "tirosEsquina": "1",
        "salvadas": "5",
        "anotaciones": [
          {
            "nombre": "Ousmane Dembélé",
            "minuto": "4'"
          }
        ]
      },
      "adversario": {
        "nombre": "ARS",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/359.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "5",
        "tirosRealizados": "10",
        "faltas": "15",
        "tarjetasAmarillas": "2",
        "tarjetasRojas": "0",
        "tirosEsquina": "3",
        "salvadas": "3",
        "anotaciones": []
      }
    },
    {
      "miEquipo": {
        "nombre": "PSG",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/160.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 1,
        "disparoAGol": "13",
        "tirosRealizados": "32",
        "faltas": "9",
        "tarjetasAmarillas": "3",
        "tarjetasRojas": "0",
        "tirosEsquina": "17",
        "salvadas": "0",
        "anotaciones": [
          {
            "nombre": "Fabián Ruiz",
            "minuto": "41'"
          }
        ]
      },
      "adversario": {
        "nombre": "NICE",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/2502.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 3,
        "disparoAGol": "3",
        "tirosRealizados": "7",
        "faltas": "11",
        "tarjetasAmarillas": "1",
        "tarjetasRojas": "0",
        "tirosEsquina": "0",
        "salvadas": "12",
        "anotaciones": [
          {
            "nombre": "Morgan Sanson",
            "minuto": "34'"
          },
          {
            "nombre": "Morgan Sanson",
            "minuto": "46'"
          },
          {
            "nombre": "Youssouf Ndayishimiye",
            "minuto": "70'"
          }
        ]
      }
    },
    {
      "miEquipo": {
        "nombre": "PSG",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/160.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 1,
        "disparoAGol": "5",
        "tirosRealizados": "10",
        "faltas": "9",
        "tarjetasAmarillas": "0",
        "tarjetasRojas": "0",
        "tirosEsquina": "4",
        "salvadas": "1",
        "anotaciones": [
          {
            "nombre": "Vitinha",
            "minuto": "33'"
          }
        ]
      },
      "adversario": {
        "nombre": "NAN",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/165.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 1,
        "disparoAGol": "2",
        "tirosRealizados": "8",
        "faltas": "5",
        "tarjetasAmarillas": "2",
        "tarjetasRojas": "0",
        "tirosEsquina": "4",
        "salvadas": "4",
        "anotaciones": [
          {
            "nombre": "Douglas",
            "minuto": "83'"
          }
        ]
      }
    },
    {
      "miEquipo": {
        "nombre": "PSG",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/160.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 2,
        "disparoAGol": "11",
        "tirosRealizados": "18",
        "faltas": "7",
        "tarjetasAmarillas": "0",
        "tarjetasRojas": "0",
        "tirosEsquina": "7",
        "salvadas": "0",
        "anotaciones": [
          {
            "nombre": "Désiré Doué",
            "minuto": "8'"
          },
          {
            "nombre": "Gonçalo Ramos",
            "minuto": "50'"
          }
        ]
      },
      "adversario": {
        "nombre": "Le Havre AC",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/3236.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 1,
        "disparoAGol": "1",
        "tirosRealizados": "9",
        "faltas": "10",
        "tarjetasAmarillas": "0",
        "tarjetasRojas": "0",
        "tirosEsquina": "3",
        "salvadas": "9",
        "anotaciones": [
          {
            "nombre": "Issa Soumaré",
            "minuto": "60'"
          }
        ]
      }
    }
  ],
  "equipoB": [
    {
      "miEquipo": {
        "nombre": "ATL",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/1068.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 4,
        "disparoAGol": "11",
        "tirosRealizados": "19",
        "faltas": "11",
        "tarjetasAmarillas": "0",
        "tarjetasRojas": "0",
        "tirosEsquina": "8",
        "salvadas": "1",
        "anotaciones": [
          {
            "nombre": "Alexander Sørloth",
            "minuto": "68'"
          },
          {
            "nombre": "Alexander Sørloth",
            "minuto": "90'"
          },
          {
            "nombre": "Alexander Sørloth",
            "minuto": "90'+3'"
          },
          {
            "nombre": "Clément Lenglet",
            "minuto": "87'"
          }
        ]
      },
      "adversario": {
        "nombre": "GIR",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/9812.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "1",
        "tirosRealizados": "2",
        "faltas": "13",
        "tarjetasAmarillas": "0",
        "tarjetasRojas": "0",
        "tirosEsquina": "1",
        "salvadas": "8",
        "anotaciones": []
      }
    },
    {
      "miEquipo": {
        "nombre": "ATL",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/1068.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 4,
        "disparoAGol": "11",
        "tirosRealizados": "20",
        "faltas": "12",
        "tarjetasAmarillas": "1",
        "tarjetasRojas": "0",
        "tirosEsquina": "7",
        "salvadas": "6",
        "anotaciones": [
          {
            "nombre": "Julián Álvarez",
            "minuto": "10'"
          },
          {
            "nombre": "Julián Álvarez",
            "minuto": "75'"
          },
          {
            "nombre": "Robin Le Normand",
            "minuto": "45'+3'"
          },
          {
            "nombre": "Ángel Correa",
            "minuto": "90'+6'"
          }
        ]
      },
      "adversario": {
        "nombre": "BET",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/244.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 1,
        "disparoAGol": "7",
        "tirosRealizados": "12",
        "faltas": "9",
        "tarjetasAmarillas": "1",
        "tarjetasRojas": "0",
        "tirosEsquina": "4",
        "salvadas": "7",
        "anotaciones": [
          {
            "nombre": "Pablo Fornals",
            "minuto": "67'"
          }
        ]
      }
    },
    {
      "miEquipo": {
        "nombre": "ATL",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/1068.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "5",
        "tirosRealizados": "9",
        "faltas": "11",
        "tarjetasAmarillas": "1",
        "tarjetasRojas": "0",
        "tirosEsquina": "5",
        "salvadas": "1",
        "anotaciones": []
      },
      "adversario": {
        "nombre": "OSA",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/97.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 2,
        "disparoAGol": "3",
        "tirosRealizados": "9",
        "faltas": "12",
        "tarjetasAmarillas": "1",
        "tarjetasRojas": "0",
        "tirosEsquina": "3",
        "salvadas": "5",
        "anotaciones": [
          {
            "nombre": "Alejandro Catena",
            "minuto": "25'"
          },
          {
            "nombre": "Ante Budimir",
            "minuto": "82'"
          }
        ]
      }
    },
    {
      "miEquipo": {
        "nombre": "ATL",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/1068.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 4,
        "disparoAGol": "7",
        "tirosRealizados": "13",
        "faltas": "7",
        "tarjetasAmarillas": "0",
        "tarjetasRojas": "0",
        "tirosEsquina": "3",
        "salvadas": "1",
        "anotaciones": [
          {
            "nombre": "Alexander Sørloth",
            "minuto": "7'"
          },
          {
            "nombre": "Alexander Sørloth",
            "minuto": "10'"
          },
          {
            "nombre": "Alexander Sørloth",
            "minuto": "11'"
          },
          {
            "nombre": "Alexander Sørloth",
            "minuto": "30'"
          }
        ]
      },
      "adversario": {
        "nombre": "SOC",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/89.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "1",
        "tirosRealizados": "6",
        "faltas": "12",
        "tarjetasAmarillas": "1",
        "tarjetasRojas": "0",
        "tirosEsquina": "3",
        "salvadas": "3",
        "anotaciones": []
      }
    },
    {
      "miEquipo": {
        "nombre": "ATL",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/1068.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "2",
        "tirosRealizados": "9",
        "faltas": "13",
        "tarjetasAmarillas": "2",
        "tarjetasRojas": "0",
        "tirosEsquina": "5",
        "salvadas": "2",
        "anotaciones": []
      },
      "adversario": {
        "nombre": "ALA",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/96.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "2",
        "tirosRealizados": "8",
        "faltas": "18",
        "tarjetasAmarillas": "3",
        "tarjetasRojas": "0",
        "tirosEsquina": "3",
        "salvadas": "2",
        "anotaciones": []
      }
    },
    {
      "miEquipo": {
        "nombre": "ATL",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/1068.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 3,
        "disparoAGol": "6",
        "tirosRealizados": "11",
        "faltas": "8",
        "tarjetasAmarillas": "0",
        "tarjetasRojas": "0",
        "tirosEsquina": "6",
        "salvadas": "5",
        "anotaciones": [
          {
            "nombre": "Alexander Sørloth",
            "minuto": "3'"
          },
          {
            "nombre": "Conor Gallagher",
            "minuto": "45'"
          },
          {
            "nombre": "Julián Álvarez",
            "minuto": "77'"
          }
        ]
      },
      "adversario": {
        "nombre": "RAY",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/101.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "5",
        "tirosRealizados": "12",
        "faltas": "15",
        "tarjetasAmarillas": "2",
        "tarjetasRojas": "0",
        "tirosEsquina": "3",
        "salvadas": "3",
        "anotaciones": []
      }
    },
    {
      "miEquipo": {
        "nombre": "ATL",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/1068.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "2",
        "tirosRealizados": "7",
        "faltas": "13",
        "tarjetasAmarillas": "1",
        "tarjetasRojas": "0",
        "tirosEsquina": "4",
        "salvadas": "1",
        "anotaciones": []
      },
      "adversario": {
        "nombre": "PAL",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/98.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 1,
        "disparoAGol": "2",
        "tirosRealizados": "8",
        "faltas": "13",
        "tarjetasAmarillas": "3",
        "tarjetasRojas": "0",
        "tirosEsquina": "4",
        "salvadas": "2",
        "anotaciones": [
          {
            "nombre": "Javi Muñoz",
            "minuto": "90'+3'"
          }
        ]
      }
    },
    {
      "miEquipo": {
        "nombre": "ATL",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/1068.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 4,
        "disparoAGol": "9",
        "tirosRealizados": "24",
        "faltas": "11",
        "tarjetasAmarillas": "1",
        "tarjetasRojas": "0",
        "tirosEsquina": "5",
        "salvadas": "1",
        "anotaciones": [
          {
            "nombre": "Julián Álvarez",
            "minuto": "25' Pen"
          },
          {
            "nombre": "Julián Álvarez",
            "minuto": "71' Pen"
          },
          {
            "nombre": "Giuliano Simeone",
            "minuto": "27'"
          },
          {
            "nombre": "Alexander Sørloth",
            "minuto": "79'"
          }
        ]
      },
      "adversario": {
        "nombre": "VLD",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/95.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 2,
        "disparoAGol": "3",
        "tirosRealizados": "6",
        "faltas": "8",
        "tarjetasAmarillas": "1",
        "tarjetasRojas": "0",
        "tirosEsquina": "1",
        "salvadas": "5",
        "anotaciones": [
          {
            "nombre": "Mamadou Sylla",
            "minuto": "21' Pen"
          },
          {
            "nombre": "Javi Sánchez",
            "minuto": "56'"
          }
        ]
      }
    },
    {
      "miEquipo": {
        "nombre": "ATL",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/1068.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 2,
        "disparoAGol": "5",
        "tirosRealizados": "13",
        "faltas": "12",
        "tarjetasAmarillas": "4",
        "tarjetasRojas": "0",
        "tirosEsquina": "7",
        "salvadas": "4",
        "anotaciones": [
          {
            "nombre": "Julián Álvarez",
            "minuto": "25' Pen"
          },
          {
            "nombre": "Pablo Barrios",
            "minuto": "90'+3'"
          }
        ]
      },
      "adversario": {
        "nombre": "SEV",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/243.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 1,
        "disparoAGol": "6",
        "tirosRealizados": "11",
        "faltas": "14",
        "tarjetasAmarillas": "1",
        "tarjetasRojas": "0",
        "tirosEsquina": "7",
        "salvadas": "3",
        "anotaciones": [
          {
            "nombre": "Lucien Agoumé",
            "minuto": "7'"
          }
        ]
      }
    },
    {
      "miEquipo": {
        "nombre": "ATL",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/1068.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "0",
        "tirosRealizados": "6",
        "faltas": "11",
        "tarjetasAmarillas": "5",
        "tarjetasRojas": "0",
        "tirosEsquina": "6",
        "salvadas": "4",
        "anotaciones": []
      },
      "adversario": {
        "nombre": "BAR",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/83.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 1,
        "disparoAGol": "5",
        "tirosRealizados": "15",
        "faltas": "22",
        "tarjetasAmarillas": "3",
        "tarjetasRojas": "0",
        "tirosEsquina": "7",
        "salvadas": "0",
        "anotaciones": [
          {
            "nombre": "Ferran Torres",
            "minuto": "27'"
          }
        ]
      }
    }
  ],
  "estadisticas": {
    "ultimos10": {
      "equipoA": {
        "goles": {
          "valores": [
            5,
            3,
            3,
            4,
            2,
            1,
            1,
            1,
            1,
            2
          ],
          "promedios": {
            "moda": 1,
            "media": 2.3,
            "mediana": 2
          },
          "minimos": {
            "moda": 1,
            "media": 1,
            "mediana": 1
          }
        },
        "disparoAGol": {
          "valores": [
            8,
            8,
            9,
            8,
            6,
            4,
            4,
            13,
            5,
            11
          ],
          "promedios": {
            "moda": 8,
            "media": 7.6,
            "mediana": 8
          },
          "minimos": {
            "moda": 4,
            "media": 4,
            "mediana": 4
          }
        },
        "tirosRealizados": {
          "valores": [
            23,
            20,
            21,
            10,
            11,
            20,
            11,
            32,
            10,
            18
          ],
          "promedios": {
            "moda": 10,
            "media": 17.6,
            "mediana": 19
          },
          "minimos": {
            "moda": 10,
            "media": 10,
            "mediana": 10
          }
        },
        "tirosEsquina": {
          "valores": [
            4,
            10,
            5,
            4,
            2,
            2,
            1,
            17,
            4,
            7
          ],
          "promedios": {
            "moda": 4,
            "media": 5.6,
            "mediana": 4
          },
          "minimos": {
            "moda": 1,
            "media": 1,
            "mediana": 1
          }
        },
        "faltas": {
          "valores": [
            13,
            12,
            10,
            11,
            11,
            13,
            15,
            9,
            9,
            7
          ],
          "promedios": {
            "moda": 9,
            "media": 11,
            "mediana": 11
          },
          "minimos": {
            "moda": 7,
            "media": 7,
            "mediana": 7
          }
        },
        "tarjetasAmarillas": {
          "valores": [
            2,
            0,
            1,
            1,
            2,
            2,
            2,
            3,
            0,
            0
          ],
          "promedios": {
            "moda": 2,
            "media": 1.3,
            "mediana": 1.5
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        },
        "tarjetasRojas": {
          "valores": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
          ],
          "promedios": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        },
        "salvadas": {
          "valores": [
            2,
            1,
            1,
            3,
            3,
            1,
            5,
            0,
            1,
            0
          ],
          "promedios": {
            "moda": 1,
            "media": 1.7,
            "mediana": 1
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        }
      },
      "equipoB": {
        "goles": {
          "valores": [
            4,
            4,
            0,
            4,
            0,
            3,
            0,
            4,
            2,
            0
          ],
          "promedios": {
            "moda": 0,
            "media": 2.1,
            "mediana": 2.5
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        },
        "disparoAGol": {
          "valores": [
            11,
            11,
            5,
            7,
            2,
            6,
            2,
            9,
            5,
            0
          ],
          "promedios": {
            "moda": 2,
            "media": 5.8,
            "mediana": 5.5
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        },
        "tirosRealizados": {
          "valores": [
            19,
            20,
            9,
            13,
            9,
            11,
            7,
            24,
            13,
            6
          ],
          "promedios": {
            "moda": 9,
            "media": 13.1,
            "mediana": 12
          },
          "minimos": {
            "moda": 6,
            "media": 6,
            "mediana": 6
          }
        },
        "tirosEsquina": {
          "valores": [
            8,
            7,
            5,
            3,
            5,
            6,
            4,
            5,
            7,
            6
          ],
          "promedios": {
            "moda": 5,
            "media": 5.6,
            "mediana": 5.5
          },
          "minimos": {
            "moda": 3,
            "media": 3,
            "mediana": 3
          }
        },
        "faltas": {
          "valores": [
            11,
            12,
            11,
            7,
            13,
            8,
            13,
            11,
            12,
            11
          ],
          "promedios": {
            "moda": 11,
            "media": 10.9,
            "mediana": 11
          },
          "minimos": {
            "moda": 7,
            "media": 7,
            "mediana": 7
          }
        },
        "tarjetasAmarillas": {
          "valores": [
            0,
            1,
            1,
            0,
            2,
            0,
            1,
            1,
            4,
            5
          ],
          "promedios": {
            "moda": 1,
            "media": 1.5,
            "mediana": 1
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        },
        "tarjetasRojas": {
          "valores": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
          ],
          "promedios": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        },
        "salvadas": {
          "valores": [
            1,
            6,
            1,
            1,
            2,
            5,
            1,
            1,
            4,
            4
          ],
          "promedios": {
            "moda": 1,
            "media": 2.6,
            "mediana": 1.5
          },
          "minimos": {
            "moda": 1,
            "media": 1,
            "mediana": 1
          }
        }
      }
    },
    "ultimos5": {
      "equipoA": {
        "goles": {
          "valores": [
            5,
            3,
            3,
            4,
            2
          ],
          "promedios": {
            "moda": 3,
            "media": 3.4,
            "mediana": 3
          },
          "minimos": {
            "moda": 2,
            "media": 2,
            "mediana": 2
          }
        },
        "disparoAGol": {
          "valores": [
            8,
            8,
            9,
            8,
            6
          ],
          "promedios": {
            "moda": 8,
            "media": 7.8,
            "mediana": 8
          },
          "minimos": {
            "moda": 6,
            "media": 6,
            "mediana": 6
          }
        },
        "tirosRealizados": {
          "valores": [
            23,
            20,
            21,
            10,
            11
          ],
          "promedios": {
            "moda": 10,
            "media": 17,
            "mediana": 20
          },
          "minimos": {
            "moda": 10,
            "media": 10,
            "mediana": 10
          }
        },
        "tirosEsquina": {
          "valores": [
            4,
            10,
            5,
            4,
            2
          ],
          "promedios": {
            "moda": 4,
            "media": 5,
            "mediana": 4
          },
          "minimos": {
            "moda": 2,
            "media": 2,
            "mediana": 2
          }
        },
        "faltas": {
          "valores": [
            13,
            12,
            10,
            11,
            11
          ],
          "promedios": {
            "moda": 11,
            "media": 11.4,
            "mediana": 11
          },
          "minimos": {
            "moda": 10,
            "media": 10,
            "mediana": 10
          }
        },
        "tarjetasAmarillas": {
          "valores": [
            2,
            0,
            1,
            1,
            2
          ],
          "promedios": {
            "moda": 1,
            "media": 1.2,
            "mediana": 1
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        },
        "tarjetasRojas": {
          "valores": [
            0,
            0,
            0,
            0,
            0
          ],
          "promedios": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        },
        "salvadas": {
          "valores": [
            2,
            1,
            1,
            3,
            3
          ],
          "promedios": {
            "moda": 1,
            "media": 2,
            "mediana": 2
          },
          "minimos": {
            "moda": 1,
            "media": 1,
            "mediana": 1
          }
        }
      },
      "equipoB": {
        "goles": {
          "valores": [
            4,
            4,
            0,
            4,
            0
          ],
          "promedios": {
            "moda": 4,
            "media": 2.4,
            "mediana": 4
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        },
        "disparoAGol": {
          "valores": [
            11,
            11,
            5,
            7,
            2
          ],
          "promedios": {
            "moda": 11,
            "media": 7.2,
            "mediana": 7
          },
          "minimos": {
            "moda": 2,
            "media": 2,
            "mediana": 2
          }
        },
        "tirosRealizados": {
          "valores": [
            19,
            20,
            9,
            13,
            9
          ],
          "promedios": {
            "moda": 9,
            "media": 14,
            "mediana": 13
          },
          "minimos": {
            "moda": 9,
            "media": 9,
            "mediana": 9
          }
        },
        "tirosEsquina": {
          "valores": [
            8,
            7,
            5,
            3,
            5
          ],
          "promedios": {
            "moda": 5,
            "media": 5.6,
            "mediana": 5
          },
          "minimos": {
            "moda": 3,
            "media": 3,
            "mediana": 3
          }
        },
        "faltas": {
          "valores": [
            11,
            12,
            11,
            7,
            13
          ],
          "promedios": {
            "moda": 11,
            "media": 10.8,
            "mediana": 11
          },
          "minimos": {
            "moda": 7,
            "media": 7,
            "mediana": 7
          }
        },
        "tarjetasAmarillas": {
          "valores": [
            0,
            1,
            1,
            0,
            2
          ],
          "promedios": {
            "moda": 0,
            "media": 0.8,
            "mediana": 1
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        },
        "tarjetasRojas": {
          "valores": [
            0,
            0,
            0,
            0,
            0
          ],
          "promedios": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        },
        "salvadas": {
          "valores": [
            1,
            6,
            1,
            1,
            2
          ],
          "promedios": {
            "moda": 1,
            "media": 2.2,
            "mediana": 1
          },
          "minimos": {
            "moda": 1,
            "media": 1,
            "mediana": 1
          }
        }
      }
    }
  }
}
    
    },
    {//Millos vs once
        linkMatch: 'https://www.espn.com.co/futbol/numeritos/_/juegoId/736605',
        infoMatch: {
  "equipoA": [
    {
      "miEquipo": {
        "nombre": "MIL",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/5484.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "6",
        "tirosRealizados": "17",
        "faltas": "12",
        "tarjetasAmarillas": "4",
        "tarjetasRojas": "0",
        "tirosEsquina": "4",
        "salvadas": "7",
        "anotaciones": []
      },
      "adversario": {
        "nombre": "CAL",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/2919.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "7",
        "tirosRealizados": "16",
        "faltas": "13",
        "tarjetasAmarillas": "3",
        "tarjetasRojas": "0",
        "tirosEsquina": "7",
        "salvadas": "6",
        "anotaciones": []
      }
    },
    {
      "miEquipo": {
        "nombre": "MIL",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/5484.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "2",
        "tirosRealizados": "12",
        "faltas": "16",
        "tarjetasAmarillas": "3",
        "tarjetasRojas": "0",
        "tirosEsquina": "4",
        "salvadas": "2",
        "anotaciones": []
      },
      "adversario": {
        "nombre": "NAL",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/5264.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "2",
        "tirosRealizados": "10",
        "faltas": "16",
        "tarjetasAmarillas": "4",
        "tarjetasRojas": "0",
        "tirosEsquina": "2",
        "salvadas": "2",
        "anotaciones": []
      }
    },
    {
      "miEquipo": {
        "nombre": "MIL",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/5484.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 1,
        "disparoAGol": "3",
        "tirosRealizados": "4",
        "faltas": "12",
        "tarjetasAmarillas": "6",
        "tarjetasRojas": "1",
        "tirosEsquina": "1",
        "salvadas": "3",
        "anotaciones": [
          {
            "nombre": "Radamel Falcao",
            "minuto": "44'"
          },
          {
            "nombre": "Danovis Banguero",
            "minuto": "90'+8'"
          }
        ]
      },
      "adversario": {
        "nombre": "SFE",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/5488.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "3",
        "tirosRealizados": "12",
        "faltas": "14",
        "tarjetasAmarillas": "3",
        "tarjetasRojas": "0",
        "tirosEsquina": "6",
        "salvadas": "2",
        "anotaciones": []
      }
    },
    {
      "miEquipo": {
        "nombre": "MIL",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/5484.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 4,
        "disparoAGol": "9",
        "tirosRealizados": "32",
        "faltas": "10",
        "tarjetasAmarillas": "4",
        "tarjetasRojas": "0",
        "tirosEsquina": "12",
        "salvadas": "1",
        "anotaciones": [
          {
            "nombre": "Daniel Ruíz",
            "minuto": "35'"
          },
          {
            "nombre": "Kevin Palacios",
            "minuto": "66'"
          },
          {
            "nombre": "Radamel Falcao",
            "minuto": "81'"
          },
          {
            "nombre": "Daniel Cataño",
            "minuto": "90'+8'"
          }
        ]
      },
      "adversario": {
        "nombre": "CHI",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/5480.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 2,
        "disparoAGol": "3",
        "tirosRealizados": "6",
        "faltas": "9",
        "tarjetasAmarillas": "4",
        "tarjetasRojas": "2",
        "tirosEsquina": "1",
        "salvadas": "5",
        "anotaciones": [
          {
            "nombre": "Jairo Molina",
            "minuto": "3'"
          },
          {
            "nombre": "Jairo Molina",
            "minuto": "12' Pen"
          },
          {
            "nombre": "Estefáno Arango",
            "minuto": "43'"
          },
          {
            "nombre": "Arlen Banguero",
            "minuto": "90'+6'"
          }
        ]
      }
    },
    {
      "miEquipo": {
        "nombre": "MIL",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/5484.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 1,
        "disparoAGol": "2",
        "tirosRealizados": "14",
        "faltas": "9",
        "tarjetasAmarillas": "3",
        "tarjetasRojas": "0",
        "tirosEsquina": "5",
        "salvadas": "1",
        "anotaciones": [
          {
            "nombre": "Helibelton Palacios",
            "minuto": "15'"
          }
        ]
      },
      "adversario": {
        "nombre": "ENV",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/5481.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "1",
        "tirosRealizados": "10",
        "faltas": "16",
        "tarjetasAmarillas": "6",
        "tarjetasRojas": "0",
        "tirosEsquina": "1",
        "salvadas": "1",
        "anotaciones": []
      }
    },
    {
      "miEquipo": {
        "nombre": "MIL",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/5484.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 2,
        "disparoAGol": "10",
        "tirosRealizados": "21",
        "faltas": "13",
        "tarjetasAmarillas": "6",
        "tarjetasRojas": "0",
        "tirosEsquina": "8",
        "salvadas": "4",
        "anotaciones": [
          {
            "nombre": "Kevin Palacios",
            "minuto": "18'"
          },
          {
            "nombre": "Andres Llinas",
            "minuto": "63'"
          }
        ]
      },
      "adversario": {
        "nombre": "CAL",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/2919.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 2,
        "disparoAGol": "6",
        "tirosRealizados": "14",
        "faltas": "10",
        "tarjetasAmarillas": "4",
        "tarjetasRojas": "0",
        "tirosEsquina": "7",
        "salvadas": "8",
        "anotaciones": [
          {
            "nombre": "Jerson Malagón",
            "minuto": "9'"
          },
          {
            "nombre": "Jorge Cardona",
            "minuto": "29'"
          }
        ]
      }
    },
    {
      "miEquipo": {
        "nombre": "MIL",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/5484.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "2",
        "tirosRealizados": "11",
        "faltas": "8",
        "tarjetasAmarillas": "2",
        "tarjetasRojas": "0",
        "tirosEsquina": "5",
        "salvadas": "0",
        "anotaciones": []
      },
      "adversario": {
        "nombre": "PER",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/5486.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "0",
        "tirosRealizados": "3",
        "faltas": "10",
        "tarjetasAmarillas": "1",
        "tarjetasRojas": "0",
        "tirosEsquina": "3",
        "salvadas": "2",
        "anotaciones": []
      }
    },
    {
      "miEquipo": {
        "nombre": "MIL",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/5484.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 2,
        "disparoAGol": "3",
        "tirosRealizados": "7",
        "faltas": "15",
        "tarjetasAmarillas": "5",
        "tarjetasRojas": "0",
        "tirosEsquina": "1",
        "salvadas": "5",
        "anotaciones": [
          {
            "nombre": "Daniel Ruíz",
            "minuto": "45'+3' Pen"
          },
          {
            "nombre": "Daniel Ruíz",
            "minuto": "47'"
          }
        ]
      },
      "adversario": {
        "nombre": "BUC",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/6137.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "5",
        "tirosRealizados": "15",
        "faltas": "15",
        "tarjetasAmarillas": "6",
        "tarjetasRojas": "0",
        "tirosEsquina": "5",
        "salvadas": "1",
        "anotaciones": []
      }
    },
    {
      "miEquipo": {
        "nombre": "MIL",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/5484.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "4",
        "tirosRealizados": "6",
        "faltas": "9",
        "tarjetasAmarillas": "2",
        "tarjetasRojas": "0",
        "tirosEsquina": "4",
        "salvadas": "6",
        "anotaciones": []
      },
      "adversario": {
        "nombre": "AME",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/8109.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "6",
        "tirosRealizados": "16",
        "faltas": "6",
        "tarjetasAmarillas": "3",
        "tarjetasRojas": "0",
        "tirosEsquina": "3",
        "salvadas": "4",
        "anotaciones": []
      }
    },
    {
      "miEquipo": {
        "nombre": "MIL",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/5484.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "1",
        "tirosRealizados": "13",
        "faltas": "9",
        "tarjetasAmarillas": "3",
        "tarjetasRojas": "0",
        "tirosEsquina": "4",
        "salvadas": "3",
        "anotaciones": []
      },
      "adversario": {
        "nombre": "NAL",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/5264.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "3",
        "tirosRealizados": "10",
        "faltas": "6",
        "tarjetasAmarillas": "3",
        "tarjetasRojas": "0",
        "tirosEsquina": "8",
        "salvadas": "1",
        "anotaciones": []
      }
    }
  ],
  "equipoB": [
    {
      "miEquipo": {
        "nombre": "CAL",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/2919.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "7",
        "tirosRealizados": "16",
        "faltas": "13",
        "tarjetasAmarillas": "3",
        "tarjetasRojas": "0",
        "tirosEsquina": "7",
        "salvadas": "6",
        "anotaciones": []
      },
      "adversario": {
        "nombre": "MIL",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/5484.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "6",
        "tirosRealizados": "17",
        "faltas": "12",
        "tarjetasAmarillas": "4",
        "tarjetasRojas": "0",
        "tirosEsquina": "4",
        "salvadas": "7",
        "anotaciones": []
      }
    },
    {
      "miEquipo": {
        "nombre": "CAL",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/2919.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 1,
        "disparoAGol": "8",
        "tirosRealizados": "19",
        "faltas": "7",
        "tarjetasAmarillas": "2",
        "tarjetasRojas": "0",
        "tirosEsquina": "11",
        "salvadas": "1",
        "anotaciones": [
          {
            "nombre": "Juan Castano",
            "minuto": "80'"
          }
        ]
      },
      "adversario": {
        "nombre": "SFE",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/5488.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 2,
        "disparoAGol": "3",
        "tirosRealizados": "8",
        "faltas": "12",
        "tarjetasAmarillas": "2",
        "tarjetasRojas": "0",
        "tirosEsquina": "7",
        "salvadas": "7",
        "anotaciones": [
          {
            "nombre": "Hugo Rodallega",
            "minuto": "58'"
          },
          {
            "nombre": "Victor Moreno",
            "minuto": "65'"
          }
        ]
      }
    },
    {
      "miEquipo": {
        "nombre": "CAL",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/2919.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "0",
        "tirosRealizados": "5",
        "faltas": "7",
        "tarjetasAmarillas": "4",
        "tarjetasRojas": "0",
        "tirosEsquina": "1",
        "salvadas": "7",
        "anotaciones": []
      },
      "adversario": {
        "nombre": "NAL",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/5264.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "7",
        "tirosRealizados": "25",
        "faltas": "10",
        "tarjetasAmarillas": "3",
        "tarjetasRojas": "0",
        "tirosEsquina": "9",
        "salvadas": "0",
        "anotaciones": []
      }
    },
    {
      "miEquipo": {
        "nombre": "CAL",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/2919.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "4",
        "tirosRealizados": "11",
        "faltas": "15",
        "tarjetasAmarillas": "0",
        "tarjetasRojas": "0",
        "tirosEsquina": "5",
        "salvadas": "3",
        "anotaciones": []
      },
      "adversario": {
        "nombre": "FLU",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/3445.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 2,
        "disparoAGol": "6",
        "tirosRealizados": "10",
        "faltas": "7",
        "tarjetasAmarillas": "0",
        "tarjetasRojas": "0",
        "tirosEsquina": "5",
        "salvadas": "4",
        "anotaciones": [
          {
            "nombre": "Martinelli",
            "minuto": "2'"
          },
          {
            "nombre": "Kevin Serna",
            "minuto": "34'"
          }
        ]
      }
    },
    {
      "miEquipo": {
        "nombre": "CAL",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/2919.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 1,
        "disparoAGol": "5",
        "tirosRealizados": "16",
        "faltas": "10",
        "tarjetasAmarillas": "4",
        "tarjetasRojas": "0",
        "tirosEsquina": "8",
        "salvadas": "1",
        "anotaciones": [
          {
            "nombre": "Mateo García",
            "minuto": "16'"
          }
        ]
      },
      "adversario": {
        "nombre": "DCI",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/2672.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "1",
        "tirosRealizados": "4",
        "faltas": "10",
        "tarjetasAmarillas": "2",
        "tarjetasRojas": "1",
        "tirosEsquina": "4",
        "salvadas": "4",
        "anotaciones": [
          {
            "nombre": "Jarlan Barrera",
            "minuto": "19'"
          }
        ]
      }
    },
    {
      "miEquipo": {
        "nombre": "CAL",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/2919.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 1,
        "disparoAGol": "5",
        "tirosRealizados": "14",
        "faltas": "14",
        "tarjetasAmarillas": "5",
        "tarjetasRojas": "0",
        "tirosEsquina": "8",
        "salvadas": "3",
        "anotaciones": [
          {
            "nombre": "Dayro Moreno",
            "minuto": "41'"
          }
        ]
      },
      "adversario": {
        "nombre": "PAS",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/5485.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 2,
        "disparoAGol": "5",
        "tirosRealizados": "16",
        "faltas": "16",
        "tarjetasAmarillas": "4",
        "tarjetasRojas": "0",
        "tirosEsquina": "4",
        "salvadas": "4",
        "anotaciones": [
          {
            "nombre": "Andrés Alarcón",
            "minuto": "5'"
          },
          {
            "nombre": "Felipe Ordóñez",
            "minuto": "71'"
          }
        ]
      }
    },
    {
      "miEquipo": {
        "nombre": "CAL",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/2919.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 2,
        "disparoAGol": "5",
        "tirosRealizados": "27",
        "faltas": "20",
        "tarjetasAmarillas": "2",
        "tarjetasRojas": "0",
        "tirosEsquina": "5",
        "salvadas": "0",
        "anotaciones": [
          {
            "nombre": "Jerson Malagón",
            "minuto": "35'"
          },
          {
            "nombre": "Johan Esteban Beltran",
            "minuto": "79'"
          }
        ]
      },
      "adversario": {
        "nombre": "GVSJ",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/22174.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 1,
        "disparoAGol": "1",
        "tirosRealizados": "9",
        "faltas": "11",
        "tarjetasAmarillas": "0",
        "tarjetasRojas": "0",
        "tirosEsquina": "4",
        "salvadas": "3",
        "anotaciones": [
          {
            "nombre": "Ferddy Roca Vivancos",
            "minuto": "58'"
          }
        ]
      }
    },
    {
      "miEquipo": {
        "nombre": "CAL",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/2919.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 2,
        "disparoAGol": "6",
        "tirosRealizados": "14",
        "faltas": "10",
        "tarjetasAmarillas": "4",
        "tarjetasRojas": "0",
        "tirosEsquina": "7",
        "salvadas": "8",
        "anotaciones": [
          {
            "nombre": "Jerson Malagón",
            "minuto": "9'"
          },
          {
            "nombre": "Jorge Cardona",
            "minuto": "29'"
          }
        ]
      },
      "adversario": {
        "nombre": "MIL",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/5484.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 2,
        "disparoAGol": "10",
        "tirosRealizados": "21",
        "faltas": "13",
        "tarjetasAmarillas": "6",
        "tarjetasRojas": "0",
        "tirosEsquina": "8",
        "salvadas": "4",
        "anotaciones": [
          {
            "nombre": "Kevin Palacios",
            "minuto": "18'"
          },
          {
            "nombre": "Andres Llinas",
            "minuto": "63'"
          }
        ]
      }
    },
    {
      "miEquipo": {
        "nombre": "CAL",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/2919.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 1,
        "disparoAGol": "5",
        "tirosRealizados": "22",
        "faltas": "10",
        "tarjetasAmarillas": "2",
        "tarjetasRojas": "0",
        "tirosEsquina": "4",
        "salvadas": "1",
        "anotaciones": [
          {
            "nombre": "Luis Palacios",
            "minuto": "16'"
          }
        ]
      },
      "adversario": {
        "nombre": "UNI",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/4132.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "1",
        "tirosRealizados": "9",
        "faltas": "9",
        "tarjetasAmarillas": "2",
        "tarjetasRojas": "0",
        "tirosEsquina": "4",
        "salvadas": "4",
        "anotaciones": []
      }
    },
    {
      "miEquipo": {
        "nombre": "CAL",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/2919.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 2,
        "disparoAGol": "5",
        "tirosRealizados": "13",
        "faltas": "16",
        "tarjetasAmarillas": "5",
        "tarjetasRojas": "0",
        "tirosEsquina": "4",
        "salvadas": "2",
        "anotaciones": [
          {
            "nombre": "Dayro Moreno",
            "minuto": "22'"
          },
          {
            "nombre": "Michael Barrios",
            "minuto": "85'"
          }
        ]
      },
      "adversario": {
        "nombre": "ENV",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/5481.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 1,
        "disparoAGol": "3",
        "tirosRealizados": "6",
        "faltas": "15",
        "tarjetasAmarillas": "2",
        "tarjetasRojas": "0",
        "tirosEsquina": "5",
        "salvadas": "2",
        "anotaciones": [
          {
            "nombre": "Carlos Torres",
            "minuto": "2'"
          }
        ]
      }
    }
  ],
  "estadisticas": {
    "ultimos10": {
      "equipoA": {
        "goles": {
          "valores": [
            0,
            0,
            1,
            4,
            1,
            2,
            0,
            2,
            0,
            0
          ],
          "promedios": {
            "moda": 0,
            "media": 1,
            "mediana": 0.5
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        },
        "disparoAGol": {
          "valores": [
            6,
            2,
            3,
            9,
            2,
            10,
            2,
            3,
            4,
            1
          ],
          "promedios": {
            "moda": 2,
            "media": 4.2,
            "mediana": 3
          },
          "minimos": {
            "moda": 1,
            "media": 1,
            "mediana": 1
          }
        },
        "tirosRealizados": {
          "valores": [
            17,
            12,
            4,
            32,
            14,
            21,
            11,
            7,
            6,
            13
          ],
          "promedios": {
            "moda": 4,
            "media": 13.7,
            "mediana": 12.5
          },
          "minimos": {
            "moda": 4,
            "media": 4,
            "mediana": 4
          }
        },
        "tirosEsquina": {
          "valores": [
            4,
            4,
            1,
            12,
            5,
            8,
            5,
            1,
            4,
            4
          ],
          "promedios": {
            "moda": 4,
            "media": 4.8,
            "mediana": 4
          },
          "minimos": {
            "moda": 1,
            "media": 1,
            "mediana": 1
          }
        },
        "faltas": {
          "valores": [
            12,
            16,
            12,
            10,
            9,
            13,
            8,
            15,
            9,
            9
          ],
          "promedios": {
            "moda": 9,
            "media": 11.3,
            "mediana": 11
          },
          "minimos": {
            "moda": 8,
            "media": 8,
            "mediana": 8
          }
        },
        "tarjetasAmarillas": {
          "valores": [
            4,
            3,
            6,
            4,
            3,
            6,
            2,
            5,
            2,
            3
          ],
          "promedios": {
            "moda": 3,
            "media": 3.8,
            "mediana": 3.5
          },
          "minimos": {
            "moda": 2,
            "media": 2,
            "mediana": 2
          }
        },
        "tarjetasRojas": {
          "valores": [
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            0,
            0,
            0
          ],
          "promedios": {
            "moda": 0,
            "media": 0.1,
            "mediana": 0
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        },
        "salvadas": {
          "valores": [
            7,
            2,
            3,
            1,
            1,
            4,
            0,
            5,
            6,
            3
          ],
          "promedios": {
            "moda": 1,
            "media": 3.2,
            "mediana": 3
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        }
      },
      "equipoB": {
        "goles": {
          "valores": [
            0,
            1,
            0,
            0,
            1,
            1,
            2,
            2,
            1,
            2
          ],
          "promedios": {
            "moda": 1,
            "media": 1,
            "mediana": 1
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        },
        "disparoAGol": {
          "valores": [
            7,
            8,
            0,
            4,
            5,
            5,
            5,
            6,
            5,
            5
          ],
          "promedios": {
            "moda": 5,
            "media": 5,
            "mediana": 5
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        },
        "tirosRealizados": {
          "valores": [
            16,
            19,
            5,
            11,
            16,
            14,
            27,
            14,
            22,
            13
          ],
          "promedios": {
            "moda": 14,
            "media": 15.7,
            "mediana": 15
          },
          "minimos": {
            "moda": 5,
            "media": 5,
            "mediana": 5
          }
        },
        "tirosEsquina": {
          "valores": [
            7,
            11,
            1,
            5,
            8,
            8,
            5,
            7,
            4,
            4
          ],
          "promedios": {
            "moda": 4,
            "media": 6,
            "mediana": 6
          },
          "minimos": {
            "moda": 1,
            "media": 1,
            "mediana": 1
          }
        },
        "faltas": {
          "valores": [
            13,
            7,
            7,
            15,
            10,
            14,
            20,
            10,
            10,
            16
          ],
          "promedios": {
            "moda": 10,
            "media": 12.2,
            "mediana": 11.5
          },
          "minimos": {
            "moda": 7,
            "media": 7,
            "mediana": 7
          }
        },
        "tarjetasAmarillas": {
          "valores": [
            3,
            2,
            4,
            0,
            4,
            5,
            2,
            4,
            2,
            5
          ],
          "promedios": {
            "moda": 2,
            "media": 3.1,
            "mediana": 3.5
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        },
        "tarjetasRojas": {
          "valores": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
          ],
          "promedios": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        },
        "salvadas": {
          "valores": [
            6,
            1,
            7,
            3,
            1,
            3,
            0,
            8,
            1,
            2
          ],
          "promedios": {
            "moda": 1,
            "media": 3.2,
            "mediana": 2.5
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        }
      }
    },
    "ultimos5": {
      "equipoA": {
        "goles": {
          "valores": [
            0,
            0,
            1,
            4,
            1
          ],
          "promedios": {
            "moda": 0,
            "media": 1.2,
            "mediana": 1
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        },
        "disparoAGol": {
          "valores": [
            6,
            2,
            3,
            9,
            2
          ],
          "promedios": {
            "moda": 2,
            "media": 4.4,
            "mediana": 3
          },
          "minimos": {
            "moda": 2,
            "media": 2,
            "mediana": 2
          }
        },
        "tirosRealizados": {
          "valores": [
            17,
            12,
            4,
            32,
            14
          ],
          "promedios": {
            "moda": 4,
            "media": 15.8,
            "mediana": 14
          },
          "minimos": {
            "moda": 4,
            "media": 4,
            "mediana": 4
          }
        },
        "tirosEsquina": {
          "valores": [
            4,
            4,
            1,
            12,
            5
          ],
          "promedios": {
            "moda": 4,
            "media": 5.2,
            "mediana": 4
          },
          "minimos": {
            "moda": 1,
            "media": 1,
            "mediana": 1
          }
        },
        "faltas": {
          "valores": [
            12,
            16,
            12,
            10,
            9
          ],
          "promedios": {
            "moda": 12,
            "media": 11.8,
            "mediana": 12
          },
          "minimos": {
            "moda": 9,
            "media": 9,
            "mediana": 9
          }
        },
        "tarjetasAmarillas": {
          "valores": [
            4,
            3,
            6,
            4,
            3
          ],
          "promedios": {
            "moda": 3,
            "media": 4,
            "mediana": 4
          },
          "minimos": {
            "moda": 3,
            "media": 3,
            "mediana": 3
          }
        },
        "tarjetasRojas": {
          "valores": [
            0,
            0,
            1,
            0,
            0
          ],
          "promedios": {
            "moda": 0,
            "media": 0.2,
            "mediana": 0
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        },
        "salvadas": {
          "valores": [
            7,
            2,
            3,
            1,
            1
          ],
          "promedios": {
            "moda": 1,
            "media": 2.8,
            "mediana": 2
          },
          "minimos": {
            "moda": 1,
            "media": 1,
            "mediana": 1
          }
        }
      },
      "equipoB": {
        "goles": {
          "valores": [
            0,
            1,
            0,
            0,
            1
          ],
          "promedios": {
            "moda": 0,
            "media": 0.4,
            "mediana": 0
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        },
        "disparoAGol": {
          "valores": [
            7,
            8,
            0,
            4,
            5
          ],
          "promedios": {
            "moda": 0,
            "media": 4.8,
            "mediana": 5
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        },
        "tirosRealizados": {
          "valores": [
            16,
            19,
            5,
            11,
            16
          ],
          "promedios": {
            "moda": 16,
            "media": 13.4,
            "mediana": 16
          },
          "minimos": {
            "moda": 5,
            "media": 5,
            "mediana": 5
          }
        },
        "tirosEsquina": {
          "valores": [
            7,
            11,
            1,
            5,
            8
          ],
          "promedios": {
            "moda": 1,
            "media": 6.4,
            "mediana": 7
          },
          "minimos": {
            "moda": 1,
            "media": 1,
            "mediana": 1
          }
        },
        "faltas": {
          "valores": [
            13,
            7,
            7,
            15,
            10
          ],
          "promedios": {
            "moda": 7,
            "media": 10.4,
            "mediana": 10
          },
          "minimos": {
            "moda": 7,
            "media": 7,
            "mediana": 7
          }
        },
        "tarjetasAmarillas": {
          "valores": [
            3,
            2,
            4,
            0,
            4
          ],
          "promedios": {
            "moda": 4,
            "media": 2.6,
            "mediana": 3
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        },
        "tarjetasRojas": {
          "valores": [
            0,
            0,
            0,
            0,
            0
          ],
          "promedios": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        },
        "salvadas": {
          "valores": [
            6,
            1,
            7,
            3,
            1
          ],
          "promedios": {
            "moda": 1,
            "media": 3.6,
            "mediana": 3
          },
          "minimos": {
            "moda": 1,
            "media": 1,
            "mediana": 1
          }
        }
      }
    }
  }
}
    },
   
    {//DIM vs jr
        linkMatch: 'https://www.espn.com.co/futbol/numeritos/_/juegoId/736604',
        infoMatch: {
  "equipoA": [
    {
      "miEquipo": {
        "nombre": "DIM",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/2690.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 1,
        "disparoAGol": "4",
        "tirosRealizados": "10",
        "faltas": "15",
        "tarjetasAmarillas": "4",
        "tarjetasRojas": "1",
        "tirosEsquina": "6",
        "salvadas": "3",
        "anotaciones": [
          {
            "nombre": "Homer Martínez",
            "minuto": "43'"
          },
          {
            "nombre": "Jherson Mosquera",
            "minuto": "90'+3'"
          }
        ]
      },
      "adversario": {
        "nombre": "JUN",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/4815.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "3",
        "tirosRealizados": "15",
        "faltas": "10",
        "tarjetasAmarillas": "2",
        "tarjetasRojas": "1",
        "tirosEsquina": "3",
        "salvadas": "3",
        "anotaciones": [
          {
            "nombre": "Steven Rodríguez",
            "minuto": "90'+3'"
          }
        ]
      }
    },
    {
      "miEquipo": {
        "nombre": "DIM",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/2690.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 3,
        "disparoAGol": "6",
        "tirosRealizados": "9",
        "faltas": "17",
        "tarjetasAmarillas": "6",
        "tarjetasRojas": "0",
        "tirosEsquina": "7",
        "salvadas": "5",
        "anotaciones": [
          {
            "nombre": "Francisco Fydriszewski",
            "minuto": "34'"
          },
          {
            "nombre": "Léider Berrío",
            "minuto": "48'"
          },
          {
            "nombre": "Brayan Léon Muñiz",
            "minuto": "73'"
          }
        ]
      },
      "adversario": {
        "nombre": "TOL",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/5489.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 1,
        "disparoAGol": "6",
        "tirosRealizados": "12",
        "faltas": "15",
        "tarjetasAmarillas": "5",
        "tarjetasRojas": "1",
        "tirosEsquina": "4",
        "salvadas": "3",
        "anotaciones": [
          {
            "nombre": "Julián Quiñónes",
            "minuto": "15'"
          },
          {
            "nombre": "Kevin Pérez",
            "minuto": "90'+4'"
          }
        ]
      }
    },
    {
      "miEquipo": {
        "nombre": "DIM",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/2690.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 1,
        "disparoAGol": "5",
        "tirosRealizados": "20",
        "faltas": "17",
        "tarjetasAmarillas": "3",
        "tarjetasRojas": "0",
        "tirosEsquina": "9",
        "salvadas": "5",
        "anotaciones": [
          {
            "nombre": "Francisco Fydriszewski",
            "minuto": "90'+1'"
          }
        ]
      },
      "adversario": {
        "nombre": "AME",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/8109.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 1,
        "disparoAGol": "6",
        "tirosRealizados": "12",
        "faltas": "14",
        "tarjetasAmarillas": "2",
        "tarjetasRojas": "1",
        "tirosEsquina": "3",
        "salvadas": "4",
        "anotaciones": [
          {
            "nombre": "Rafael Carrascal",
            "minuto": "90'+4'"
          },
          {
            "nombre": "Franco Leys",
            "minuto": "78'"
          }
        ]
      }
    },
    {
      "miEquipo": {
        "nombre": "DIM",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/2690.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "3",
        "tirosRealizados": "15",
        "faltas": "7",
        "tarjetasAmarillas": "5",
        "tarjetasRojas": "0",
        "tirosEsquina": "5",
        "salvadas": "3",
        "anotaciones": []
      },
      "adversario": {
        "nombre": "AME",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/8109.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 2,
        "disparoAGol": "5",
        "tirosRealizados": "16",
        "faltas": "14",
        "tarjetasAmarillas": "5",
        "tarjetasRojas": "0",
        "tirosEsquina": "0",
        "salvadas": "3",
        "anotaciones": [
          {
            "nombre": "Luis Ramos",
            "minuto": "90'"
          },
          {
            "nombre": "Luis Ramos",
            "minuto": "90'+4'"
          }
        ]
      }
    },
    {
      "miEquipo": {
        "nombre": "DIM",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/2690.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 2,
        "disparoAGol": "6",
        "tirosRealizados": "18",
        "faltas": "16",
        "tarjetasAmarillas": "5",
        "tarjetasRojas": "0",
        "tirosEsquina": "2",
        "salvadas": "7",
        "anotaciones": [
          {
            "nombre": "Léider Berrío",
            "minuto": "50'"
          },
          {
            "nombre": "Francisco Chaverra",
            "minuto": "70'"
          }
        ]
      },
      "adversario": {
        "nombre": "PER",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/5486.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "7",
        "tirosRealizados": "19",
        "faltas": "11",
        "tarjetasAmarillas": "5",
        "tarjetasRojas": "0",
        "tirosEsquina": "10",
        "salvadas": "4",
        "anotaciones": []
      }
    },
    {
      "miEquipo": {
        "nombre": "DIM",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/2690.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "5",
        "tirosRealizados": "26",
        "faltas": "7",
        "tarjetasAmarillas": "2",
        "tarjetasRojas": "0",
        "tirosEsquina": "8",
        "salvadas": "1",
        "anotaciones": []
      },
      "adversario": {
        "nombre": "TOL",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/5489.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 1,
        "disparoAGol": "2",
        "tirosRealizados": "4",
        "faltas": "8",
        "tarjetasAmarillas": "5",
        "tarjetasRojas": "0",
        "tirosEsquina": "1",
        "salvadas": "5",
        "anotaciones": [
          {
            "nombre": "Jersson González",
            "minuto": "80'"
          }
        ]
      }
    },
    {
      "miEquipo": {
        "nombre": "DIM",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/2690.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "4",
        "tirosRealizados": "6",
        "faltas": "10",
        "tarjetasAmarillas": "3",
        "tarjetasRojas": "0",
        "tirosEsquina": "4",
        "salvadas": "9",
        "anotaciones": []
      },
      "adversario": {
        "nombre": "BUC",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/6137.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 2,
        "disparoAGol": "11",
        "tirosRealizados": "16",
        "faltas": "13",
        "tarjetasAmarillas": "5",
        "tarjetasRojas": "0",
        "tirosEsquina": "4",
        "salvadas": "4",
        "anotaciones": [
          {
            "nombre": "Kevin Londoño",
            "minuto": "35'"
          },
          {
            "nombre": "Leonardo Flores",
            "minuto": "90'+1'"
          }
        ]
      }
    },
    {
      "miEquipo": {
        "nombre": "DIM",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/2690.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 1,
        "disparoAGol": "7",
        "tirosRealizados": "16",
        "faltas": "11",
        "tarjetasAmarillas": "4",
        "tarjetasRojas": "2",
        "tirosEsquina": "7",
        "salvadas": "5",
        "anotaciones": [
          {
            "nombre": "Marcus Vinicius Felicio",
            "minuto": "89'"
          },
          {
            "nombre": "Francisco Chaverra",
            "minuto": "53'"
          },
          {
            "nombre": "Brayan Léon Muñiz",
            "minuto": "90'+5'"
          }
        ]
      },
      "adversario": {
        "nombre": "NAL",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/5264.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 1,
        "disparoAGol": "6",
        "tirosRealizados": "12",
        "faltas": "18",
        "tarjetasAmarillas": "4",
        "tarjetasRojas": "1",
        "tirosEsquina": "4",
        "salvadas": "6",
        "anotaciones": [
          {
            "nombre": "Edwin Cardona",
            "minuto": "40' Pen"
          },
          {
            "nombre": "Jorman Campuzano",
            "minuto": "90'+5'"
          }
        ]
      }
    },
    {
      "miEquipo": {
        "nombre": "DIM",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/2690.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "2",
        "tirosRealizados": "6",
        "faltas": "6",
        "tarjetasAmarillas": "2",
        "tarjetasRojas": "1",
        "tirosEsquina": "7",
        "salvadas": "4",
        "anotaciones": [
          {
            "nombre": "Luis Sandoval",
            "minuto": "90'+4'"
          }
        ]
      },
      "adversario": {
        "nombre": "FOR",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/4928.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "4",
        "tirosRealizados": "10",
        "faltas": "5",
        "tarjetasAmarillas": "2",
        "tarjetasRojas": "0",
        "tirosEsquina": "4",
        "salvadas": "2",
        "anotaciones": []
      }
    },
    {
      "miEquipo": {
        "nombre": "DIM",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/2690.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 2,
        "disparoAGol": "5",
        "tirosRealizados": "11",
        "faltas": "9",
        "tarjetasAmarillas": "2",
        "tarjetasRojas": "0",
        "tirosEsquina": "7",
        "salvadas": "1",
        "anotaciones": [
          {
            "nombre": "Léider Berrío",
            "minuto": "27'"
          },
          {
            "nombre": "Francisco Chaverra",
            "minuto": "29'"
          }
        ]
      },
      "adversario": {
        "nombre": "CAL",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/2919.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "1",
        "tirosRealizados": "6",
        "faltas": "6",
        "tarjetasAmarillas": "1",
        "tarjetasRojas": "0",
        "tirosEsquina": "5",
        "salvadas": "3",
        "anotaciones": []
      }
    }
  ],
  "equipoB": [
    {
      "miEquipo": {
        "nombre": "JUN",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/4815.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "3",
        "tirosRealizados": "15",
        "faltas": "10",
        "tarjetasAmarillas": "2",
        "tarjetasRojas": "1",
        "tirosEsquina": "3",
        "salvadas": "3",
        "anotaciones": [
          {
            "nombre": "Steven Rodríguez",
            "minuto": "90'+3'"
          }
        ]
      },
      "adversario": {
        "nombre": "DIM",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/2690.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 1,
        "disparoAGol": "4",
        "tirosRealizados": "10",
        "faltas": "15",
        "tarjetasAmarillas": "4",
        "tarjetasRojas": "1",
        "tirosEsquina": "6",
        "salvadas": "3",
        "anotaciones": [
          {
            "nombre": "Homer Martínez",
            "minuto": "43'"
          },
          {
            "nombre": "Jherson Mosquera",
            "minuto": "90'+3'"
          }
        ]
      }
    },
    {
      "miEquipo": {
        "nombre": "JUN",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/4815.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 1,
        "disparoAGol": "4",
        "tirosRealizados": "14",
        "faltas": "10",
        "tarjetasAmarillas": "4",
        "tarjetasRojas": "0",
        "tirosEsquina": "3",
        "salvadas": "4",
        "anotaciones": [
          {
            "nombre": "Steven Rodríguez",
            "minuto": "2'"
          }
        ]
      },
      "adversario": {
        "nombre": "AME",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/8109.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 2,
        "disparoAGol": "6",
        "tirosRealizados": "20",
        "faltas": "11",
        "tarjetasAmarillas": "2",
        "tarjetasRojas": "0",
        "tirosEsquina": "9",
        "salvadas": "3",
        "anotaciones": [
          {
            "nombre": "Duván Vergara",
            "minuto": "14'"
          },
          {
            "nombre": "Rafael Carrascal",
            "minuto": "83' Pen"
          }
        ]
      }
    },
    {
      "miEquipo": {
        "nombre": "JUN",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/4815.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 1,
        "disparoAGol": "7",
        "tirosRealizados": "18",
        "faltas": "6",
        "tarjetasAmarillas": "1",
        "tarjetasRojas": "0",
        "tirosEsquina": "7",
        "salvadas": "0",
        "anotaciones": [
          {
            "nombre": "Jhomier Guerrero",
            "minuto": "44'"
          }
        ]
      },
      "adversario": {
        "nombre": "TOL",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/5489.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 1,
        "disparoAGol": "1",
        "tirosRealizados": "3",
        "faltas": "7",
        "tarjetasAmarillas": "0",
        "tarjetasRojas": "0",
        "tirosEsquina": "0",
        "salvadas": "5",
        "anotaciones": [
          {
            "nombre": "Cristian Arrieta",
            "minuto": "27'"
          }
        ]
      }
    },
    {
      "miEquipo": {
        "nombre": "JUN",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/4815.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 3,
        "disparoAGol": "5",
        "tirosRealizados": "8",
        "faltas": "9",
        "tarjetasAmarillas": "4",
        "tarjetasRojas": "0",
        "tirosEsquina": "3",
        "salvadas": "7",
        "anotaciones": [
          {
            "nombre": "Guillermo Paiva",
            "minuto": "14'"
          },
          {
            "nombre": "Jordan Barrera",
            "minuto": "36'"
          },
          {
            "nombre": "Cristian Báez",
            "minuto": "58'"
          }
        ]
      },
      "adversario": {
        "nombre": "NAL",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/5264.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 2,
        "disparoAGol": "9",
        "tirosRealizados": "26",
        "faltas": "15",
        "tarjetasAmarillas": "2",
        "tarjetasRojas": "0",
        "tirosEsquina": "9",
        "salvadas": "2",
        "anotaciones": [
          {
            "nombre": "Billy Arce",
            "minuto": "56'"
          },
          {
            "nombre": "Kevin Viveros",
            "minuto": "76'"
          }
        ]
      }
    },
    {
      "miEquipo": {
        "nombre": "JUN",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/4815.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 2,
        "disparoAGol": "3",
        "tirosRealizados": "10",
        "faltas": "14",
        "tarjetasAmarillas": "5",
        "tarjetasRojas": "0",
        "tirosEsquina": "5",
        "salvadas": "2",
        "anotaciones": [
          {
            "nombre": "Carlos Bacca",
            "minuto": "25' Pen"
          },
          {
            "nombre": "Didier Moreno",
            "minuto": "74'"
          }
        ]
      },
      "adversario": {
        "nombre": "FOR",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/4928.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 1,
        "disparoAGol": "3",
        "tirosRealizados": "8",
        "faltas": "11",
        "tarjetasAmarillas": "0",
        "tarjetasRojas": "0",
        "tirosEsquina": "0",
        "salvadas": "1",
        "anotaciones": [
          {
            "nombre": "Emilio Aristizábal",
            "minuto": "54'"
          }
        ]
      }
    },
    {
      "miEquipo": {
        "nombre": "JUN",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/4815.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 1,
        "disparoAGol": "1",
        "tirosRealizados": "5",
        "faltas": "6",
        "tarjetasAmarillas": "3",
        "tarjetasRojas": "0",
        "tirosEsquina": "1",
        "salvadas": "3",
        "anotaciones": [
          {
            "nombre": "Fabián Ángel",
            "minuto": "59'"
          }
        ]
      },
      "adversario": {
        "nombre": "SFE",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/5488.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 2,
        "disparoAGol": "5",
        "tirosRealizados": "25",
        "faltas": "10",
        "tarjetasAmarillas": "4",
        "tarjetasRojas": "0",
        "tirosEsquina": "4",
        "salvadas": "0",
        "anotaciones": [
          {
            "nombre": "Hugo Rodallega",
            "minuto": "67' Pen"
          },
          {
            "nombre": "Omar Fernández",
            "minuto": "75'"
          }
        ]
      }
    },
    {
      "miEquipo": {
        "nombre": "JUN",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/4815.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "6",
        "tirosRealizados": "19",
        "faltas": "8",
        "tarjetasAmarillas": "2",
        "tarjetasRojas": "0",
        "tirosEsquina": "8",
        "salvadas": "2",
        "anotaciones": []
      },
      "adversario": {
        "nombre": "AME",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/8109.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "2",
        "tirosRealizados": "7",
        "faltas": "11",
        "tarjetasAmarillas": "0",
        "tarjetasRojas": "1",
        "tirosEsquina": "1",
        "salvadas": "6",
        "anotaciones": [
          {
            "nombre": "Joider Micolta",
            "minuto": "90'"
          }
        ]
      }
    },
    {
      "miEquipo": {
        "nombre": "JUN",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/4815.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "5",
        "tirosRealizados": "14",
        "faltas": "8",
        "tarjetasAmarillas": "4",
        "tarjetasRojas": "0",
        "tirosEsquina": "5",
        "salvadas": "4",
        "anotaciones": []
      },
      "adversario": {
        "nombre": "PER",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/5486.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 1,
        "disparoAGol": "5",
        "tirosRealizados": "14",
        "faltas": "16",
        "tarjetasAmarillas": "6",
        "tarjetasRojas": "0",
        "tirosEsquina": "3",
        "salvadas": "5",
        "anotaciones": [
          {
            "nombre": "Darwin Quintero",
            "minuto": "43'"
          }
        ]
      }
    },
    {
      "miEquipo": {
        "nombre": "JUN",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/4815.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 2,
        "disparoAGol": "7",
        "tirosRealizados": "17",
        "faltas": "11",
        "tarjetasAmarillas": "2",
        "tarjetasRojas": "0",
        "tirosEsquina": "2",
        "salvadas": "4",
        "anotaciones": [
          {
            "nombre": "Brayan Castrillón",
            "minuto": "16'"
          },
          {
            "nombre": "Steven Rodríguez",
            "minuto": "90'"
          }
        ]
      },
      "adversario": {
        "nombre": "AFC",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/9761.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "4",
        "tirosRealizados": "18",
        "faltas": "10",
        "tarjetasAmarillas": "1",
        "tarjetasRojas": "0",
        "tirosEsquina": "4",
        "salvadas": "5",
        "anotaciones": []
      }
    },
    {
      "miEquipo": {
        "nombre": "JUN",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/4815.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "3",
        "tirosRealizados": "8",
        "faltas": "8",
        "tarjetasAmarillas": "1",
        "tarjetasRojas": "0",
        "tirosEsquina": "2",
        "salvadas": "1",
        "anotaciones": []
      },
      "adversario": {
        "nombre": "TOL",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/5489.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "1",
        "tirosRealizados": "12",
        "faltas": "15",
        "tarjetasAmarillas": "2",
        "tarjetasRojas": "0",
        "tirosEsquina": "5",
        "salvadas": "3",
        "anotaciones": []
      }
    }
  ],
  "estadisticas": {
    "ultimos10": {
      "equipoA": {
        "goles": {
          "promedios": {
            "moda": 0,
            "media": 1,
            "mediana": 1
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        },
        "disparoAGol": {
          "promedios": {
            "moda": 5,
            "media": 4.7,
            "mediana": 5
          },
          "minimos": {
            "moda": 2,
            "media": 2,
            "mediana": 2
          }
        },
        "tirosRealizados": {
          "promedios": {
            "moda": 6,
            "media": 13.7,
            "mediana": 13
          },
          "minimos": {
            "moda": 6,
            "media": 6,
            "mediana": 6
          }
        },
        "tirosEsquina": {
          "promedios": {
            "moda": 7,
            "media": 6.2,
            "mediana": 7
          },
          "minimos": {
            "moda": 2,
            "media": 2,
            "mediana": 2
          }
        },
        "faltas": {
          "promedios": {
            "moda": 7,
            "media": 11.5,
            "mediana": 10.5
          },
          "minimos": {
            "moda": 6,
            "media": 6,
            "mediana": 6
          }
        },
        "tarjetasAmarillas": {
          "promedios": {
            "moda": 2,
            "media": 3.6,
            "mediana": 3.5
          },
          "minimos": {
            "moda": 2,
            "media": 2,
            "mediana": 2
          }
        },
        "tarjetasRojas": {
          "promedios": {
            "moda": 0,
            "media": 0.4,
            "mediana": 0
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        },
        "salvadas": {
          "promedios": {
            "moda": 5,
            "media": 4.3,
            "mediana": 4.5
          },
          "minimos": {
            "moda": 1,
            "media": 1,
            "mediana": 1
          }
        }
      },
      "equipoB": {
        "goles": {
          "promedios": {
            "moda": 0,
            "media": 1,
            "mediana": 1
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        },
        "disparoAGol": {
          "promedios": {
            "moda": 3,
            "media": 4.4,
            "mediana": 4.5
          },
          "minimos": {
            "moda": 1,
            "media": 1,
            "mediana": 1
          }
        },
        "tirosRealizados": {
          "promedios": {
            "moda": 8,
            "media": 12.8,
            "mediana": 14
          },
          "minimos": {
            "moda": 5,
            "media": 5,
            "mediana": 5
          }
        },
        "tirosEsquina": {
          "promedios": {
            "moda": 3,
            "media": 3.9,
            "mediana": 3
          },
          "minimos": {
            "moda": 1,
            "media": 1,
            "mediana": 1
          }
        },
        "faltas": {
          "promedios": {
            "moda": 8,
            "media": 9,
            "mediana": 8.5
          },
          "minimos": {
            "moda": 6,
            "media": 6,
            "mediana": 6
          }
        },
        "tarjetasAmarillas": {
          "promedios": {
            "moda": 2,
            "media": 2.8,
            "mediana": 2.5
          },
          "minimos": {
            "moda": 1,
            "media": 1,
            "mediana": 1
          }
        },
        "tarjetasRojas": {
          "promedios": {
            "moda": 0,
            "media": 0.1,
            "mediana": 0
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        },
        "salvadas": {
          "promedios": {
            "moda": 4,
            "media": 3,
            "mediana": 3
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        }
      }
    },
    "ultimos5": {
      "equipoA": {
        "goles": {
          "promedios": {
            "moda": 1,
            "media": 1.4,
            "mediana": 1
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        },
        "disparoAGol": {
          "promedios": {
            "moda": 6,
            "media": 4.8,
            "mediana": 5
          },
          "minimos": {
            "moda": 3,
            "media": 3,
            "mediana": 3
          }
        },
        "tirosRealizados": {
          "promedios": {
            "moda": 9,
            "media": 14.4,
            "mediana": 15
          },
          "minimos": {
            "moda": 9,
            "media": 9,
            "mediana": 9
          }
        },
        "tirosEsquina": {
          "promedios": {
            "moda": 2,
            "media": 5.8,
            "mediana": 6
          },
          "minimos": {
            "moda": 2,
            "media": 2,
            "mediana": 2
          }
        },
        "faltas": {
          "promedios": {
            "moda": 17,
            "media": 14.4,
            "mediana": 16
          },
          "minimos": {
            "moda": 7,
            "media": 7,
            "mediana": 7
          }
        },
        "tarjetasAmarillas": {
          "promedios": {
            "moda": 5,
            "media": 4.6,
            "mediana": 5
          },
          "minimos": {
            "moda": 3,
            "media": 3,
            "mediana": 3
          }
        },
        "tarjetasRojas": {
          "promedios": {
            "moda": 0,
            "media": 0.2,
            "mediana": 0
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        },
        "salvadas": {
          "promedios": {
            "moda": 3,
            "media": 4.6,
            "mediana": 5
          },
          "minimos": {
            "moda": 3,
            "media": 3,
            "mediana": 3
          }
        }
      },
      "equipoB": {
        "goles": {
          "promedios": {
            "moda": 1,
            "media": 1.4,
            "mediana": 1
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        },
        "disparoAGol": {
          "promedios": {
            "moda": 3,
            "media": 4.4,
            "mediana": 4
          },
          "minimos": {
            "moda": 3,
            "media": 3,
            "mediana": 3
          }
        },
        "tirosRealizados": {
          "promedios": {
            "moda": 8,
            "media": 13,
            "mediana": 14
          },
          "minimos": {
            "moda": 8,
            "media": 8,
            "mediana": 8
          }
        },
        "tirosEsquina": {
          "promedios": {
            "moda": 3,
            "media": 4.2,
            "mediana": 3
          },
          "minimos": {
            "moda": 3,
            "media": 3,
            "mediana": 3
          }
        },
        "faltas": {
          "promedios": {
            "moda": 10,
            "media": 9.8,
            "mediana": 10
          },
          "minimos": {
            "moda": 6,
            "media": 6,
            "mediana": 6
          }
        },
        "tarjetasAmarillas": {
          "promedios": {
            "moda": 4,
            "media": 3.2,
            "mediana": 4
          },
          "minimos": {
            "moda": 1,
            "media": 1,
            "mediana": 1
          }
        },
        "tarjetasRojas": {
          "promedios": {
            "moda": 0,
            "media": 0.2,
            "mediana": 0
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        },
        "salvadas": {
          "promedios": {
            "moda": 0,
            "media": 3.2,
            "mediana": 3
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        }
      }
    }
  }
}
    },
    {//peru ecuador
        linkMatch: 'https://www.espn.com.co/futbol/numeritos/_/juegoId/684656',
        infoMatch:  {
  "equipoA": [
    {
      "miEquipo": {
        "nombre": "Perú",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/per.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "1",
        "tirosRealizados": "4",
        "faltas": "5",
        "tarjetasAmarillas": "1",
        "tarjetasRojas": "0",
        "tirosEsquina": "4",
        "salvadas": "0",
        "anotaciones": []
      },
      "adversario": {
        "nombre": "COL",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/col.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "0",
        "tirosRealizados": "15",
        "faltas": "10",
        "tarjetasAmarillas": "1",
        "tarjetasRojas": "0",
        "tirosEsquina": "2",
        "salvadas": "1",
        "anotaciones": []
      }
    },
    {
      "miEquipo": {
        "nombre": "Perú",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/per.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "1",
        "tirosRealizados": "11",
        "faltas": "14",
        "tarjetasAmarillas": "2",
        "tarjetasRojas": "0",
        "tirosEsquina": "1",
        "salvadas": "4",
        "anotaciones": []
      },
      "adversario": {
        "nombre": "VEN",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/ven.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 1,
        "disparoAGol": "5",
        "tirosRealizados": "12",
        "faltas": "15",
        "tarjetasAmarillas": "3",
        "tarjetasRojas": "0",
        "tirosEsquina": "4",
        "salvadas": "1",
        "anotaciones": [
          {
            "nombre": "Salomón Rondón",
            "minuto": "41' Pen"
          }
        ]
      }
    },
    {
      "miEquipo": {
        "nombre": "Perú",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/per.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 3,
        "disparoAGol": "7",
        "tirosRealizados": "12",
        "faltas": "10",
        "tarjetasAmarillas": "0",
        "tarjetasRojas": "0",
        "tirosEsquina": "3",
        "salvadas": "4",
        "anotaciones": [
          {
            "nombre": "Andy Polo",
            "minuto": "37'"
          },
          {
            "nombre": "Paolo Guerrero",
            "minuto": "45'"
          },
          {
            "nombre": "Edison Flores",
            "minuto": "82'"
          }
        ]
      },
      "adversario": {
        "nombre": "BOL",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/bol.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 1,
        "disparoAGol": "5",
        "tirosRealizados": "15",
        "faltas": "17",
        "tarjetasAmarillas": "0",
        "tarjetasRojas": "0",
        "tirosEsquina": "4",
        "salvadas": "4",
        "anotaciones": [
          {
            "nombre": "Miguel Terceros",
            "minuto": "58' Pen"
          }
        ]
      }
    },
    {
      "miEquipo": {
        "nombre": "Perú",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/per.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "0",
        "tirosRealizados": "2",
        "faltas": "18",
        "tarjetasAmarillas": "3",
        "tarjetasRojas": "0",
        "tirosEsquina": "1",
        "salvadas": "2",
        "anotaciones": []
      },
      "adversario": {
        "nombre": "ARG",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/arg.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 1,
        "disparoAGol": "3",
        "tirosRealizados": "11",
        "faltas": "10",
        "tarjetasAmarillas": "0",
        "tarjetasRojas": "0",
        "tirosEsquina": "2",
        "salvadas": "0",
        "anotaciones": [
          {
            "nombre": "Lautaro Martínez",
            "minuto": "55'"
          }
        ]
      }
    },
    {
      "miEquipo": {
        "nombre": "Perú",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/per.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "6",
        "tirosRealizados": "13",
        "faltas": "10",
        "tarjetasAmarillas": "2",
        "tarjetasRojas": "0",
        "tirosEsquina": "4",
        "salvadas": "5",
        "anotaciones": []
      },
      "adversario": {
        "nombre": "CHI",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/chi.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "5",
        "tirosRealizados": "13",
        "faltas": "11",
        "tarjetasAmarillas": "3",
        "tarjetasRojas": "0",
        "tirosEsquina": "8",
        "salvadas": "6",
        "anotaciones": []
      }
    },
    {
      "miEquipo": {
        "nombre": "Perú",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/per.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "2",
        "tirosRealizados": "3",
        "faltas": "17",
        "tarjetasAmarillas": "5",
        "tarjetasRojas": "0",
        "tirosEsquina": "1",
        "salvadas": "4",
        "anotaciones": []
      },
      "adversario": {
        "nombre": "BRA",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/bra.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 4,
        "disparoAGol": "8",
        "tirosRealizados": "18",
        "faltas": "10",
        "tarjetasAmarillas": "1",
        "tarjetasRojas": "0",
        "tirosEsquina": "6",
        "salvadas": "2",
        "anotaciones": [
          {
            "nombre": "Raphinha",
            "minuto": "38' Pen"
          },
          {
            "nombre": "Raphinha",
            "minuto": "54' Pen"
          },
          {
            "nombre": "Andreas Pereira",
            "minuto": "71'"
          },
          {
            "nombre": "Luiz Henrique",
            "minuto": "74'"
          }
        ]
      }
    },
    {
      "miEquipo": {
        "nombre": "Perú",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/per.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 1,
        "disparoAGol": "3",
        "tirosRealizados": "13",
        "faltas": "17",
        "tarjetasAmarillas": "0",
        "tarjetasRojas": "0",
        "tirosEsquina": "5",
        "salvadas": "3",
        "anotaciones": [
          {
            "nombre": "Miguel Araujo",
            "minuto": "88'"
          }
        ]
      },
      "adversario": {
        "nombre": "URU",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/uru.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "3",
        "tirosRealizados": "8",
        "faltas": "6",
        "tarjetasAmarillas": "1",
        "tarjetasRojas": "0",
        "tirosEsquina": "2",
        "salvadas": "2",
        "anotaciones": []
      }
    },
    {
      "miEquipo": {
        "nombre": "Perú",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/per.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "1",
        "tirosRealizados": "2",
        "faltas": "9",
        "tarjetasAmarillas": "4",
        "tarjetasRojas": "0",
        "tirosEsquina": "0",
        "salvadas": "4",
        "anotaciones": []
      },
      "adversario": {
        "nombre": "ECU",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/ecu.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 1,
        "disparoAGol": "5",
        "tirosRealizados": "11",
        "faltas": "20",
        "tarjetasAmarillas": "1",
        "tarjetasRojas": "0",
        "tirosEsquina": "8",
        "salvadas": "1",
        "anotaciones": [
          {
            "nombre": "Enner Valencia",
            "minuto": "54'"
          }
        ]
      }
    },
    {
      "miEquipo": {
        "nombre": "Perú",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/per.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 1,
        "disparoAGol": "3",
        "tirosRealizados": "9",
        "faltas": "9",
        "tarjetasAmarillas": "0",
        "tarjetasRojas": "0",
        "tirosEsquina": "5",
        "salvadas": "4",
        "anotaciones": [
          {
            "nombre": "Alexander Callens",
            "minuto": "68'"
          }
        ]
      },
      "adversario": {
        "nombre": "COL",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/col.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 1,
        "disparoAGol": "5",
        "tirosRealizados": "16",
        "faltas": "13",
        "tarjetasAmarillas": "2",
        "tarjetasRojas": "0",
        "tirosEsquina": "10",
        "salvadas": "2",
        "anotaciones": [
          {
            "nombre": "Luis Díaz",
            "minuto": "82'"
          }
        ]
      }
    },
    {
      "miEquipo": {
        "nombre": "Perú",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/per.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "1",
        "tirosRealizados": "6",
        "faltas": "20",
        "tarjetasAmarillas": "5",
        "tarjetasRojas": "0",
        "tirosEsquina": "3",
        "salvadas": "4",
        "anotaciones": []
      },
      "adversario": {
        "nombre": "ARG",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/arg.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 2,
        "disparoAGol": "6",
        "tirosRealizados": "12",
        "faltas": "11",
        "tarjetasAmarillas": "1",
        "tarjetasRojas": "0",
        "tirosEsquina": "6",
        "salvadas": "1",
        "anotaciones": [
          {
            "nombre": "Lautaro Martínez",
            "minuto": "47'"
          },
          {
            "nombre": "Lautaro Martínez",
            "minuto": "86'"
          }
        ]
      }
    }
  ],
  "equipoB": [
    {
      "miEquipo": {
        "nombre": "ECU",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/ecu.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "3",
        "tirosRealizados": "7",
        "faltas": "14",
        "tarjetasAmarillas": "0",
        "tarjetasRojas": "0",
        "tirosEsquina": "4",
        "salvadas": "2",
        "anotaciones": []
      },
      "adversario": {
        "nombre": "BRA",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/bra.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "2",
        "tirosRealizados": "3",
        "faltas": "9",
        "tarjetasAmarillas": "0",
        "tarjetasRojas": "0",
        "tirosEsquina": "3",
        "salvadas": "3",
        "anotaciones": []
      }
    },
    {
      "miEquipo": {
        "nombre": "ECU",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/ecu.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "2",
        "tirosRealizados": "7",
        "faltas": "15",
        "tarjetasAmarillas": "2",
        "tarjetasRojas": "0",
        "tirosEsquina": "2",
        "salvadas": "2",
        "anotaciones": []
      },
      "adversario": {
        "nombre": "CHI",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/chi.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "2",
        "tirosRealizados": "16",
        "faltas": "15",
        "tarjetasAmarillas": "1",
        "tarjetasRojas": "0",
        "tirosEsquina": "2",
        "salvadas": "2",
        "anotaciones": []
      }
    },
    {
      "miEquipo": {
        "nombre": "ECU",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/ecu.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 2,
        "disparoAGol": "6",
        "tirosRealizados": "16",
        "faltas": "13",
        "tarjetasAmarillas": "1",
        "tarjetasRojas": "0",
        "tirosEsquina": "6",
        "salvadas": "5",
        "anotaciones": [
          {
            "nombre": "Enner Valencia",
            "minuto": "39'"
          },
          {
            "nombre": "Enner Valencia",
            "minuto": "46'"
          }
        ]
      },
      "adversario": {
        "nombre": "VEN",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/ven.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 1,
        "disparoAGol": "6",
        "tirosRealizados": "10",
        "faltas": "13",
        "tarjetasAmarillas": "2",
        "tarjetasRojas": "0",
        "tirosEsquina": "2",
        "salvadas": "4",
        "anotaciones": [
          {
            "nombre": "Jhonder Cádiz",
            "minuto": "90'+1'"
          }
        ]
      }
    },
    {
      "miEquipo": {
        "nombre": "ECU",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/ecu.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 1,
        "disparoAGol": "1",
        "tirosRealizados": "4",
        "faltas": "11",
        "tarjetasAmarillas": "2",
        "tarjetasRojas": "1",
        "tirosEsquina": "2",
        "salvadas": "7",
        "anotaciones": [
          {
            "nombre": "Enner Valencia",
            "minuto": "7'"
          },
          {
            "nombre": "Piero Hincapié",
            "minuto": "34'"
          }
        ]
      },
      "adversario": {
        "nombre": "COL",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/col.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "7",
        "tirosRealizados": "25",
        "faltas": "12",
        "tarjetasAmarillas": "3",
        "tarjetasRojas": "0",
        "tirosEsquina": "5",
        "salvadas": "0",
        "anotaciones": []
      }
    },
    {
      "miEquipo": {
        "nombre": "ECU",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/ecu.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 4,
        "disparoAGol": "15",
        "tirosRealizados": "28",
        "faltas": "13",
        "tarjetasAmarillas": "0",
        "tarjetasRojas": "0",
        "tirosEsquina": "12",
        "salvadas": "1",
        "anotaciones": [
          {
            "nombre": "Enner Valencia",
            "minuto": "26' Pen"
          },
          {
            "nombre": "Gonzalo Plata",
            "minuto": "28'"
          },
          {
            "nombre": "Gonzalo Plata",
            "minuto": "49'"
          },
          {
            "nombre": "Alan Minda",
            "minuto": "61'"
          }
        ]
      },
      "adversario": {
        "nombre": "BOL",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/bol.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "1",
        "tirosRealizados": "1",
        "faltas": "5",
        "tarjetasAmarillas": "1",
        "tarjetasRojas": "1",
        "tirosEsquina": "1",
        "salvadas": "11",
        "anotaciones": [
          {
            "nombre": "José Sagredo",
            "minuto": "24'"
          }
        ]
      }
    },
    {
      "miEquipo": {
        "nombre": "ECU",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/ecu.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "4",
        "tirosRealizados": "8",
        "faltas": "12",
        "tarjetasAmarillas": "1",
        "tarjetasRojas": "0",
        "tirosEsquina": "5",
        "salvadas": "4",
        "anotaciones": []
      },
      "adversario": {
        "nombre": "URU",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/uru.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "4",
        "tirosRealizados": "11",
        "faltas": "14",
        "tarjetasAmarillas": "1",
        "tarjetasRojas": "0",
        "tirosEsquina": "6",
        "salvadas": "4",
        "anotaciones": []
      }
    },
    {
      "miEquipo": {
        "nombre": "ECU",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/ecu.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "5",
        "tirosRealizados": "14",
        "faltas": "6",
        "tarjetasAmarillas": "1",
        "tarjetasRojas": "0",
        "tirosEsquina": "4",
        "salvadas": "2",
        "anotaciones": []
      },
      "adversario": {
        "nombre": "PAR",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/par.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "2",
        "tirosRealizados": "3",
        "faltas": "10",
        "tarjetasAmarillas": "1",
        "tarjetasRojas": "0",
        "tirosEsquina": "3",
        "salvadas": "5",
        "anotaciones": []
      }
    },
    {
      "miEquipo": {
        "nombre": "ECU",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/ecu.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 1,
        "disparoAGol": "5",
        "tirosRealizados": "11",
        "faltas": "20",
        "tarjetasAmarillas": "1",
        "tarjetasRojas": "0",
        "tirosEsquina": "8",
        "salvadas": "1",
        "anotaciones": [
          {
            "nombre": "Enner Valencia",
            "minuto": "54'"
          }
        ]
      },
      "adversario": {
        "nombre": "Perú",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/per.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "1",
        "tirosRealizados": "2",
        "faltas": "9",
        "tarjetasAmarillas": "4",
        "tarjetasRojas": "0",
        "tirosEsquina": "0",
        "salvadas": "4",
        "anotaciones": []
      }
    },
    {
      "miEquipo": {
        "nombre": "ECU",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/ecu.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "2",
        "tirosRealizados": "9",
        "faltas": "17",
        "tarjetasAmarillas": "0",
        "tarjetasRojas": "0",
        "tirosEsquina": "2",
        "salvadas": "2",
        "anotaciones": []
      },
      "adversario": {
        "nombre": "BRA",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/bra.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 1,
        "disparoAGol": "3",
        "tirosRealizados": "10",
        "faltas": "8",
        "tarjetasAmarillas": "1",
        "tarjetasRojas": "0",
        "tirosEsquina": "4",
        "salvadas": "1",
        "anotaciones": [
          {
            "nombre": "Rodrygo",
            "minuto": "30'"
          }
        ]
      }
    },
    {
      "miEquipo": {
        "nombre": "ECU",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/ecu.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "3",
        "tirosRealizados": "9",
        "faltas": "12",
        "tarjetasAmarillas": "2",
        "tarjetasRojas": "0",
        "tirosEsquina": "2",
        "salvadas": "4",
        "anotaciones": []
      },
      "adversario": {
        "nombre": "MEX",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/mex.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "4",
        "tirosRealizados": "20",
        "faltas": "16",
        "tarjetasAmarillas": "5",
        "tarjetasRojas": "0",
        "tirosEsquina": "5",
        "salvadas": "3",
        "anotaciones": []
      }
    }
  ],
  "estadisticas": {
    "ultimos10": {
      "equipoA": {
        "goles": {
          "promedios": {
            "moda": 0,
            "media": 0.5,
            "mediana": 0
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        },
        "disparoAGol": {
          "promedios": {
            "moda": 1,
            "media": 2.5,
            "mediana": 1.5
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        },
        "tirosRealizados": {
          "promedios": {
            "moda": 2,
            "media": 7.5,
            "mediana": 7.5
          },
          "minimos": {
            "moda": 2,
            "media": 2,
            "mediana": 2
          }
        },
        "tirosEsquina": {
          "promedios": {
            "moda": 1,
            "media": 2.7,
            "mediana": 3
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        },
        "faltas": {
          "promedios": {
            "moda": 9,
            "media": 12.9,
            "mediana": 12
          },
          "minimos": {
            "moda": 5,
            "media": 5,
            "mediana": 5
          }
        },
        "tarjetasAmarillas": {
          "promedios": {
            "moda": 0,
            "media": 2.2,
            "mediana": 2
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        },
        "tarjetasRojas": {
          "promedios": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        },
        "salvadas": {
          "promedios": {
            "moda": 4,
            "media": 3.4,
            "mediana": 4
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        }
      },
      "equipoB": {
        "goles": {
          "promedios": {
            "moda": 0,
            "media": 0.8,
            "mediana": 0
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        },
        "disparoAGol": {
          "promedios": {
            "moda": 2,
            "media": 4.6,
            "mediana": 3.5
          },
          "minimos": {
            "moda": 1,
            "media": 1,
            "mediana": 1
          }
        },
        "tirosRealizados": {
          "promedios": {
            "moda": 7,
            "media": 11.3,
            "mediana": 9
          },
          "minimos": {
            "moda": 4,
            "media": 4,
            "mediana": 4
          }
        },
        "tirosEsquina": {
          "promedios": {
            "moda": 2,
            "media": 4.7,
            "mediana": 4
          },
          "minimos": {
            "moda": 2,
            "media": 2,
            "mediana": 2
          }
        },
        "faltas": {
          "promedios": {
            "moda": 12,
            "media": 13.3,
            "mediana": 13
          },
          "minimos": {
            "moda": 6,
            "media": 6,
            "mediana": 6
          }
        },
        "tarjetasAmarillas": {
          "promedios": {
            "moda": 1,
            "media": 1,
            "mediana": 1
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        },
        "tarjetasRojas": {
          "promedios": {
            "moda": 0,
            "media": 0.1,
            "mediana": 0
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        },
        "salvadas": {
          "promedios": {
            "moda": 2,
            "media": 3,
            "mediana": 2
          },
          "minimos": {
            "moda": 1,
            "media": 1,
            "mediana": 1
          }
        }
      }
    },
    "ultimos5": {
      "equipoA": {
        "goles": {
          "promedios": {
            "moda": 0,
            "media": 0.6,
            "mediana": 0
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        },
        "disparoAGol": {
          "promedios": {
            "moda": 1,
            "media": 3,
            "mediana": 1
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        },
        "tirosRealizados": {
          "promedios": {
            "moda": 2,
            "media": 8.4,
            "mediana": 11
          },
          "minimos": {
            "moda": 2,
            "media": 2,
            "mediana": 2
          }
        },
        "tirosEsquina": {
          "promedios": {
            "moda": 1,
            "media": 2.6,
            "mediana": 3
          },
          "minimos": {
            "moda": 1,
            "media": 1,
            "mediana": 1
          }
        },
        "faltas": {
          "promedios": {
            "moda": 10,
            "media": 11.4,
            "mediana": 10
          },
          "minimos": {
            "moda": 5,
            "media": 5,
            "mediana": 5
          }
        },
        "tarjetasAmarillas": {
          "promedios": {
            "moda": 2,
            "media": 1.6,
            "mediana": 2
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        },
        "tarjetasRojas": {
          "promedios": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        },
        "salvadas": {
          "promedios": {
            "moda": 4,
            "media": 3,
            "mediana": 4
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        }
      },
      "equipoB": {
        "goles": {
          "promedios": {
            "moda": 0,
            "media": 1.4,
            "mediana": 1
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        },
        "disparoAGol": {
          "promedios": {
            "moda": 1,
            "media": 5.4,
            "mediana": 3
          },
          "minimos": {
            "moda": 1,
            "media": 1,
            "mediana": 1
          }
        },
        "tirosRealizados": {
          "promedios": {
            "moda": 7,
            "media": 12.4,
            "mediana": 7
          },
          "minimos": {
            "moda": 4,
            "media": 4,
            "mediana": 4
          }
        },
        "tirosEsquina": {
          "promedios": {
            "moda": 2,
            "media": 5.2,
            "mediana": 4
          },
          "minimos": {
            "moda": 2,
            "media": 2,
            "mediana": 2
          }
        },
        "faltas": {
          "promedios": {
            "moda": 13,
            "media": 13.2,
            "mediana": 13
          },
          "minimos": {
            "moda": 11,
            "media": 11,
            "mediana": 11
          }
        },
        "tarjetasAmarillas": {
          "promedios": {
            "moda": 0,
            "media": 1,
            "mediana": 1
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        },
        "tarjetasRojas": {
          "promedios": {
            "moda": 0,
            "media": 0.2,
            "mediana": 0
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        },
        "salvadas": {
          "promedios": {
            "moda": 2,
            "media": 3.4,
            "mediana": 2
          },
          "minimos": {
            "moda": 1,
            "media": 1,
            "mediana": 1
          }
        }
      }
    }
  }
}
    },
    {//brasil - par
        linkMatch: 'https://www.espn.com.co/futbol/numeritos/_/juegoId/684655',
        infoMatch:  {
  "equipoA": [
    {
      "miEquipo": {
        "nombre": "BRA",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/bra.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "2",
        "tirosRealizados": "3",
        "faltas": "9",
        "tarjetasAmarillas": "0",
        "tarjetasRojas": "0",
        "tirosEsquina": "3",
        "salvadas": "3",
        "anotaciones": []
      },
      "adversario": {
        "nombre": "ECU",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/ecu.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "3",
        "tirosRealizados": "7",
        "faltas": "14",
        "tarjetasAmarillas": "0",
        "tarjetasRojas": "0",
        "tirosEsquina": "4",
        "salvadas": "2",
        "anotaciones": []
      }
    },
    {
      "miEquipo": {
        "nombre": "BRA",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/bra.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 1,
        "disparoAGol": "1",
        "tirosRealizados": "3",
        "faltas": "19",
        "tarjetasAmarillas": "5",
        "tarjetasRojas": "0",
        "tirosEsquina": "0",
        "salvadas": "3",
        "anotaciones": [
          {
            "nombre": "Matheus Cunha",
            "minuto": "26'"
          }
        ]
      },
      "adversario": {
        "nombre": "ARG",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/arg.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 4,
        "disparoAGol": "7",
        "tirosRealizados": "12",
        "faltas": "12",
        "tarjetasAmarillas": "5",
        "tarjetasRojas": "0",
        "tirosEsquina": "6",
        "salvadas": "0",
        "anotaciones": [
          {
            "nombre": "Julián Álvarez",
            "minuto": "4'"
          },
          {
            "nombre": "Enzo Fernández",
            "minuto": "12'"
          },
          {
            "nombre": "Alexis Mac Allister",
            "minuto": "37'"
          },
          {
            "nombre": "Giuliano Simeone",
            "minuto": "71'"
          }
        ]
      }
    },
    {
      "miEquipo": {
        "nombre": "BRA",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/bra.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 2,
        "disparoAGol": "7",
        "tirosRealizados": "17",
        "faltas": "15",
        "tarjetasAmarillas": "3",
        "tarjetasRojas": "0",
        "tirosEsquina": "4",
        "salvadas": "2",
        "anotaciones": [
          {
            "nombre": "Raphinha",
            "minuto": "6' Pen"
          },
          {
            "nombre": "Vinícius Júnior",
            "minuto": "90'+9'"
          }
        ]
      },
      "adversario": {
        "nombre": "COL",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/col.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 1,
        "disparoAGol": "3",
        "tirosRealizados": "10",
        "faltas": "24",
        "tarjetasAmarillas": "1",
        "tarjetasRojas": "0",
        "tirosEsquina": "2",
        "salvadas": "5",
        "anotaciones": [
          {
            "nombre": "Luis Díaz",
            "minuto": "41'"
          }
        ]
      }
    },
    {
      "miEquipo": {
        "nombre": "BRA",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/bra.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 1,
        "disparoAGol": "3",
        "tirosRealizados": "18",
        "faltas": "15",
        "tarjetasAmarillas": "3",
        "tarjetasRojas": "0",
        "tirosEsquina": "4",
        "salvadas": "1",
        "anotaciones": [
          {
            "nombre": "Gerson",
            "minuto": "62'"
          }
        ]
      },
      "adversario": {
        "nombre": "URU",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/uru.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 1,
        "disparoAGol": "2",
        "tirosRealizados": "8",
        "faltas": "11",
        "tarjetasAmarillas": "2",
        "tarjetasRojas": "0",
        "tirosEsquina": "2",
        "salvadas": "2",
        "anotaciones": [
          {
            "nombre": "Federico Valverde",
            "minuto": "55'"
          }
        ]
      }
    },
    {
      "miEquipo": {
        "nombre": "BRA",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/bra.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 1,
        "disparoAGol": "4",
        "tirosRealizados": "13",
        "faltas": "12",
        "tarjetasAmarillas": "2",
        "tarjetasRojas": "0",
        "tirosEsquina": "9",
        "salvadas": "3",
        "anotaciones": [
          {
            "nombre": "Raphinha",
            "minuto": "43'"
          }
        ]
      },
      "adversario": {
        "nombre": "VEN",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/ven.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 1,
        "disparoAGol": "5",
        "tirosRealizados": "12",
        "faltas": "14",
        "tarjetasAmarillas": "4",
        "tarjetasRojas": "1",
        "tirosEsquina": "3",
        "salvadas": "2",
        "anotaciones": [
          {
            "nombre": "Telasco Segovia",
            "minuto": "46'"
          },
          {
            "nombre": "Alexander González",
            "minuto": "89'"
          }
        ]
      }
    },
    {
      "miEquipo": {
        "nombre": "BRA",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/bra.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 4,
        "disparoAGol": "8",
        "tirosRealizados": "18",
        "faltas": "10",
        "tarjetasAmarillas": "1",
        "tarjetasRojas": "0",
        "tirosEsquina": "6",
        "salvadas": "2",
        "anotaciones": [
          {
            "nombre": "Raphinha",
            "minuto": "38' Pen"
          },
          {
            "nombre": "Raphinha",
            "minuto": "54' Pen"
          },
          {
            "nombre": "Andreas Pereira",
            "minuto": "71'"
          },
          {
            "nombre": "Luiz Henrique",
            "minuto": "74'"
          }
        ]
      },
      "adversario": {
        "nombre": "Perú",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/per.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "2",
        "tirosRealizados": "3",
        "faltas": "17",
        "tarjetasAmarillas": "5",
        "tarjetasRojas": "0",
        "tirosEsquina": "1",
        "salvadas": "4",
        "anotaciones": []
      }
    },
    {
      "miEquipo": {
        "nombre": "BRA",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/bra.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 2,
        "disparoAGol": "4",
        "tirosRealizados": "14",
        "faltas": "12",
        "tarjetasAmarillas": "2",
        "tarjetasRojas": "0",
        "tirosEsquina": "7",
        "salvadas": "0",
        "anotaciones": [
          {
            "nombre": "Igor Jesus",
            "minuto": "45'+1'"
          },
          {
            "nombre": "Luiz Henrique",
            "minuto": "89'"
          }
        ]
      },
      "adversario": {
        "nombre": "CHI",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/chi.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 1,
        "disparoAGol": "1",
        "tirosRealizados": "7",
        "faltas": "14",
        "tarjetasAmarillas": "2",
        "tarjetasRojas": "0",
        "tirosEsquina": "4",
        "salvadas": "2",
        "anotaciones": [
          {
            "nombre": "Eduardo Vargas",
            "minuto": "2'"
          }
        ]
      }
    },
    {
      "miEquipo": {
        "nombre": "BRA",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/bra.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "3",
        "tirosRealizados": "9",
        "faltas": "8",
        "tarjetasAmarillas": "2",
        "tarjetasRojas": "0",
        "tirosEsquina": "6",
        "salvadas": "1",
        "anotaciones": []
      },
      "adversario": {
        "nombre": "PAR",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/par.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 1,
        "disparoAGol": "2",
        "tirosRealizados": "7",
        "faltas": "13",
        "tarjetasAmarillas": "4",
        "tarjetasRojas": "0",
        "tirosEsquina": "4",
        "salvadas": "2",
        "anotaciones": [
          {
            "nombre": "Diego Gómez",
            "minuto": "20'"
          }
        ]
      }
    },
    {
      "miEquipo": {
        "nombre": "BRA",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/bra.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 1,
        "disparoAGol": "3",
        "tirosRealizados": "10",
        "faltas": "8",
        "tarjetasAmarillas": "1",
        "tarjetasRojas": "0",
        "tirosEsquina": "4",
        "salvadas": "1",
        "anotaciones": [
          {
            "nombre": "Rodrygo",
            "minuto": "30'"
          }
        ]
      },
      "adversario": {
        "nombre": "ECU",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/ecu.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "2",
        "tirosRealizados": "9",
        "faltas": "17",
        "tarjetasAmarillas": "0",
        "tarjetasRojas": "0",
        "tirosEsquina": "2",
        "salvadas": "2",
        "anotaciones": []
      }
    },
    {
      "miEquipo": {
        "nombre": "BRA",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/bra.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 1,
        "disparoAGol": "3",
        "tirosRealizados": "7",
        "faltas": "14",
        "tarjetasAmarillas": "3",
        "tarjetasRojas": "0",
        "tirosEsquina": "7",
        "salvadas": "5",
        "anotaciones": [
          {
            "nombre": "Raphinha",
            "minuto": "12'"
          }
        ]
      },
      "adversario": {
        "nombre": "COL",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/col.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 1,
        "disparoAGol": "6",
        "tirosRealizados": "13",
        "faltas": "19",
        "tarjetasAmarillas": "2",
        "tarjetasRojas": "0",
        "tirosEsquina": "5",
        "salvadas": "2",
        "anotaciones": [
          {
            "nombre": "Daniel Muñoz",
            "minuto": "45'+2'"
          }
        ]
      }
    }
  ],
  "equipoB": [
    {
      "miEquipo": {
        "nombre": "PAR",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/par.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 2,
        "disparoAGol": "5",
        "tirosRealizados": "12",
        "faltas": "18",
        "tarjetasAmarillas": "2",
        "tarjetasRojas": "0",
        "tirosEsquina": "5",
        "salvadas": "1",
        "anotaciones": [
          {
            "nombre": "Matías Galarza",
            "minuto": "13'"
          },
          {
            "nombre": "Julio Enciso",
            "minuto": "81' Pen"
          }
        ]
      },
      "adversario": {
        "nombre": "URU",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/uru.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "1",
        "tirosRealizados": "5",
        "faltas": "10",
        "tarjetasAmarillas": "0",
        "tarjetasRojas": "0",
        "tirosEsquina": "7",
        "salvadas": "3",
        "anotaciones": []
      }
    },
    {
      "miEquipo": {
        "nombre": "PAR",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/par.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 2,
        "disparoAGol": "6",
        "tirosRealizados": "21",
        "faltas": "13",
        "tarjetasAmarillas": "4",
        "tarjetasRojas": "0",
        "tirosEsquina": "4",
        "salvadas": "3",
        "anotaciones": [
          {
            "nombre": "Júnior Alonso",
            "minuto": "45'+4'"
          },
          {
            "nombre": "Julio Enciso",
            "minuto": "62'"
          }
        ]
      },
      "adversario": {
        "nombre": "COL",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/col.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 2,
        "disparoAGol": "5",
        "tirosRealizados": "10",
        "faltas": "13",
        "tarjetasAmarillas": "2",
        "tarjetasRojas": "0",
        "tirosEsquina": "5",
        "salvadas": "3",
        "anotaciones": [
          {
            "nombre": "Luis Díaz",
            "minuto": "1'"
          },
          {
            "nombre": "Jhon Durán",
            "minuto": "13'"
          }
        ]
      }
    },
    {
      "miEquipo": {
        "nombre": "PAR",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/par.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 1,
        "disparoAGol": "5",
        "tirosRealizados": "16",
        "faltas": "10",
        "tarjetasAmarillas": "0",
        "tarjetasRojas": "0",
        "tirosEsquina": "6",
        "salvadas": "3",
        "anotaciones": [
          {
            "nombre": "Omar Alderete",
            "minuto": "60'"
          }
        ]
      },
      "adversario": {
        "nombre": "CHI",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/chi.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "3",
        "tirosRealizados": "9",
        "faltas": "11",
        "tarjetasAmarillas": "0",
        "tarjetasRojas": "0",
        "tirosEsquina": "4",
        "salvadas": "4",
        "anotaciones": []
      }
    },
    {
      "miEquipo": {
        "nombre": "PAR",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/par.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 2,
        "disparoAGol": "4",
        "tirosRealizados": "13",
        "faltas": "10",
        "tarjetasAmarillas": "0",
        "tarjetasRojas": "1",
        "tirosEsquina": "2",
        "salvadas": "3",
        "anotaciones": [
          {
            "nombre": "Miguel Almirón",
            "minuto": "71'"
          },
          {
            "nombre": "Julio Enciso",
            "minuto": "90'+1'"
          },
          {
            "nombre": "Diego Gómez",
            "minuto": "83'"
          }
        ]
      },
      "adversario": {
        "nombre": "BOL",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/bol.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 2,
        "disparoAGol": "5",
        "tirosRealizados": "11",
        "faltas": "7",
        "tarjetasAmarillas": "0",
        "tarjetasRojas": "1",
        "tirosEsquina": "4",
        "salvadas": "2",
        "anotaciones": [
          {
            "nombre": "Ervin Vaca",
            "minuto": "15'"
          },
          {
            "nombre": "Miguel Terceros",
            "minuto": "80' Pen"
          },
          {
            "nombre": "Adalid Terrazas",
            "minuto": "82'"
          }
        ]
      }
    },
    {
      "miEquipo": {
        "nombre": "PAR",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/par.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 2,
        "disparoAGol": "2",
        "tirosRealizados": "8",
        "faltas": "17",
        "tarjetasAmarillas": "3",
        "tarjetasRojas": "0",
        "tirosEsquina": "6",
        "salvadas": "0",
        "anotaciones": [
          {
            "nombre": "Antonio Sanabria",
            "minuto": "19'"
          },
          {
            "nombre": "Omar Alderete",
            "minuto": "47'"
          }
        ]
      },
      "adversario": {
        "nombre": "ARG",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/arg.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 1,
        "disparoAGol": "1",
        "tirosRealizados": "9",
        "faltas": "9",
        "tarjetasAmarillas": "1",
        "tarjetasRojas": "0",
        "tirosEsquina": "2",
        "salvadas": "0",
        "anotaciones": [
          {
            "nombre": "Lautaro Martínez",
            "minuto": "11'"
          }
        ]
      }
    },
    {
      "miEquipo": {
        "nombre": "PAR",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/par.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 2,
        "disparoAGol": "6",
        "tirosRealizados": "13",
        "faltas": "10",
        "tarjetasAmarillas": "2",
        "tarjetasRojas": "0",
        "tirosEsquina": "5",
        "salvadas": "2",
        "anotaciones": [
          {
            "nombre": "Antonio Sanabria",
            "minuto": "59'"
          },
          {
            "nombre": "Antonio Sanabria",
            "minuto": "74'"
          }
        ]
      },
      "adversario": {
        "nombre": "VEN",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/ven.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 1,
        "disparoAGol": "3",
        "tirosRealizados": "6",
        "faltas": "17",
        "tarjetasAmarillas": "6",
        "tarjetasRojas": "0",
        "tirosEsquina": "1",
        "salvadas": "4",
        "anotaciones": [
          {
            "nombre": "Jon Aramburu",
            "minuto": "25'"
          }
        ]
      }
    },
    {
      "miEquipo": {
        "nombre": "PAR",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/par.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "2",
        "tirosRealizados": "3",
        "faltas": "10",
        "tarjetasAmarillas": "1",
        "tarjetasRojas": "0",
        "tirosEsquina": "3",
        "salvadas": "5",
        "anotaciones": []
      },
      "adversario": {
        "nombre": "ECU",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/ecu.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "5",
        "tirosRealizados": "14",
        "faltas": "6",
        "tarjetasAmarillas": "1",
        "tarjetasRojas": "0",
        "tirosEsquina": "4",
        "salvadas": "2",
        "anotaciones": []
      }
    },
    {
      "miEquipo": {
        "nombre": "PAR",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/par.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 1,
        "disparoAGol": "2",
        "tirosRealizados": "7",
        "faltas": "13",
        "tarjetasAmarillas": "4",
        "tarjetasRojas": "0",
        "tirosEsquina": "4",
        "salvadas": "2",
        "anotaciones": [
          {
            "nombre": "Diego Gómez",
            "minuto": "20'"
          }
        ]
      },
      "adversario": {
        "nombre": "BRA",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/bra.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "3",
        "tirosRealizados": "9",
        "faltas": "8",
        "tarjetasAmarillas": "2",
        "tarjetasRojas": "0",
        "tirosEsquina": "6",
        "salvadas": "1",
        "anotaciones": []
      }
    },
    {
      "miEquipo": {
        "nombre": "PAR",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/par.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "2",
        "tirosRealizados": "8",
        "faltas": "11",
        "tarjetasAmarillas": "2",
        "tarjetasRojas": "0",
        "tirosEsquina": "0",
        "salvadas": "1",
        "anotaciones": []
      },
      "adversario": {
        "nombre": "URU",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/uru.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "1",
        "tirosRealizados": "12",
        "faltas": "13",
        "tarjetasAmarillas": "4",
        "tarjetasRojas": "0",
        "tirosEsquina": "8",
        "salvadas": "2",
        "anotaciones": []
      }
    },
    {
      "miEquipo": {
        "nombre": "PAR",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/par.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 1,
        "disparoAGol": "6",
        "tirosRealizados": "17",
        "faltas": "17",
        "tarjetasAmarillas": "3",
        "tarjetasRojas": "0",
        "tirosEsquina": "6",
        "salvadas": "0",
        "anotaciones": [
          {
            "nombre": "Ramón Sosa",
            "minuto": "55'"
          }
        ]
      },
      "adversario": {
        "nombre": "CRC",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/crc.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 2,
        "disparoAGol": "2",
        "tirosRealizados": "2",
        "faltas": "11",
        "tarjetasAmarillas": "3",
        "tarjetasRojas": "0",
        "tirosEsquina": "1",
        "salvadas": "5",
        "anotaciones": [
          {
            "nombre": "Francisco Calvo",
            "minuto": "3'"
          },
          {
            "nombre": "Josimar Alcócer",
            "minuto": "7'"
          }
        ]
      }
    }
  ],
  "estadisticas": {
    "ultimos10": {
      "equipoA": {
        "goles": {
          "promedios": {
            "moda": 1,
            "media": 1.3,
            "mediana": 1
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        },
        "disparoAGol": {
          "promedios": {
            "moda": 3,
            "media": 3.8,
            "mediana": 3
          },
          "minimos": {
            "moda": 1,
            "media": 1,
            "mediana": 1
          }
        },
        "tirosRealizados": {
          "promedios": {
            "moda": 3,
            "media": 11.2,
            "mediana": 11.5
          },
          "minimos": {
            "moda": 3,
            "media": 3,
            "mediana": 3
          }
        },
        "tirosEsquina": {
          "promedios": {
            "moda": 4,
            "media": 5,
            "mediana": 5
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        },
        "faltas": {
          "promedios": {
            "moda": 8,
            "media": 12.2,
            "mediana": 12
          },
          "minimos": {
            "moda": 8,
            "media": 8,
            "mediana": 8
          }
        },
        "tarjetasAmarillas": {
          "promedios": {
            "moda": 2,
            "media": 2.2,
            "mediana": 2
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        },
        "tarjetasRojas": {
          "promedios": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        },
        "salvadas": {
          "promedios": {
            "moda": 1,
            "media": 2.1,
            "mediana": 2
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        }
      },
      "equipoB": {
        "goles": {
          "promedios": {
            "moda": 2,
            "media": 1.3,
            "mediana": 1.5
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        },
        "disparoAGol": {
          "promedios": {
            "moda": 2,
            "media": 4,
            "mediana": 4.5
          },
          "minimos": {
            "moda": 2,
            "media": 2,
            "mediana": 2
          }
        },
        "tirosRealizados": {
          "promedios": {
            "moda": 8,
            "media": 11.8,
            "mediana": 12.5
          },
          "minimos": {
            "moda": 3,
            "media": 3,
            "mediana": 3
          }
        },
        "tirosEsquina": {
          "promedios": {
            "moda": 6,
            "media": 4.1,
            "mediana": 4.5
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        },
        "faltas": {
          "promedios": {
            "moda": 10,
            "media": 12.9,
            "mediana": 12
          },
          "minimos": {
            "moda": 10,
            "media": 10,
            "mediana": 10
          }
        },
        "tarjetasAmarillas": {
          "promedios": {
            "moda": 2,
            "media": 2.1,
            "mediana": 2
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        },
        "tarjetasRojas": {
          "promedios": {
            "moda": 0,
            "media": 0.1,
            "mediana": 0
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        },
        "salvadas": {
          "promedios": {
            "moda": 3,
            "media": 2,
            "mediana": 2
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        }
      }
    },
    "ultimos5": {
      "equipoA": {
        "goles": {
          "promedios": {
            "moda": 1,
            "media": 1,
            "mediana": 1
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        },
        "disparoAGol": {
          "promedios": {
            "moda": 1,
            "media": 3.4,
            "mediana": 3
          },
          "minimos": {
            "moda": 1,
            "media": 1,
            "mediana": 1
          }
        },
        "tirosRealizados": {
          "promedios": {
            "moda": 3,
            "media": 10.8,
            "mediana": 13
          },
          "minimos": {
            "moda": 3,
            "media": 3,
            "mediana": 3
          }
        },
        "tirosEsquina": {
          "promedios": {
            "moda": 4,
            "media": 4,
            "mediana": 4
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        },
        "faltas": {
          "promedios": {
            "moda": 15,
            "media": 14,
            "mediana": 15
          },
          "minimos": {
            "moda": 9,
            "media": 9,
            "mediana": 9
          }
        },
        "tarjetasAmarillas": {
          "promedios": {
            "moda": 3,
            "media": 2.6,
            "mediana": 3
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        },
        "tarjetasRojas": {
          "promedios": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        },
        "salvadas": {
          "promedios": {
            "moda": 3,
            "media": 2.4,
            "mediana": 3
          },
          "minimos": {
            "moda": 1,
            "media": 1,
            "mediana": 1
          }
        }
      },
      "equipoB": {
        "goles": {
          "promedios": {
            "moda": 2,
            "media": 1.8,
            "mediana": 2
          },
          "minimos": {
            "moda": 1,
            "media": 1,
            "mediana": 1
          }
        },
        "disparoAGol": {
          "promedios": {
            "moda": 5,
            "media": 4.4,
            "mediana": 5
          },
          "minimos": {
            "moda": 2,
            "media": 2,
            "mediana": 2
          }
        },
        "tirosRealizados": {
          "promedios": {
            "moda": 8,
            "media": 14,
            "mediana": 13
          },
          "minimos": {
            "moda": 8,
            "media": 8,
            "mediana": 8
          }
        },
        "tirosEsquina": {
          "promedios": {
            "moda": 6,
            "media": 4.6,
            "mediana": 5
          },
          "minimos": {
            "moda": 2,
            "media": 2,
            "mediana": 2
          }
        },
        "faltas": {
          "promedios": {
            "moda": 10,
            "media": 13.6,
            "mediana": 13
          },
          "minimos": {
            "moda": 10,
            "media": 10,
            "mediana": 10
          }
        },
        "tarjetasAmarillas": {
          "promedios": {
            "moda": 0,
            "media": 1.8,
            "mediana": 2
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        },
        "tarjetasRojas": {
          "promedios": {
            "moda": 0,
            "media": 0.2,
            "mediana": 0
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        },
        "salvadas": {
          "promedios": {
            "moda": 3,
            "media": 2,
            "mediana": 3
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        }
      }
    }
  }
}
    },
    {//urugua -vene
        linkMatch: 'https://www.espn.com.co/futbol/numeritos/_/juegoId/684657',
        infoMatch:  {
  "equipoA": [
    {
      "miEquipo": {
        "nombre": "URU",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/uru.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "1",
        "tirosRealizados": "5",
        "faltas": "10",
        "tarjetasAmarillas": "0",
        "tarjetasRojas": "0",
        "tirosEsquina": "7",
        "salvadas": "3",
        "anotaciones": []
      },
      "adversario": {
        "nombre": "PAR",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/par.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 2,
        "disparoAGol": "5",
        "tirosRealizados": "12",
        "faltas": "18",
        "tarjetasAmarillas": "2",
        "tarjetasRojas": "0",
        "tirosEsquina": "5",
        "salvadas": "1",
        "anotaciones": [
          {
            "nombre": "Matías Galarza",
            "minuto": "13'"
          },
          {
            "nombre": "Julio Enciso",
            "minuto": "81' Pen"
          }
        ]
      }
    },
    {
      "miEquipo": {
        "nombre": "URU",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/uru.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "0",
        "tirosRealizados": "11",
        "faltas": "5",
        "tarjetasAmarillas": "2",
        "tarjetasRojas": "0",
        "tirosEsquina": "3",
        "salvadas": "7",
        "anotaciones": []
      },
      "adversario": {
        "nombre": "BOL",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/bol.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "7",
        "tirosRealizados": "32",
        "faltas": "10",
        "tarjetasAmarillas": "1",
        "tarjetasRojas": "0",
        "tirosEsquina": "16",
        "salvadas": "0",
        "anotaciones": []
      }
    },
    {
      "miEquipo": {
        "nombre": "URU",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/uru.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "2",
        "tirosRealizados": "6",
        "faltas": "11",
        "tarjetasAmarillas": "2",
        "tarjetasRojas": "0",
        "tirosEsquina": "4",
        "salvadas": "3",
        "anotaciones": []
      },
      "adversario": {
        "nombre": "ARG",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/arg.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 1,
        "disparoAGol": "4",
        "tirosRealizados": "12",
        "faltas": "11",
        "tarjetasAmarillas": "1",
        "tarjetasRojas": "1",
        "tirosEsquina": "3",
        "salvadas": "2",
        "anotaciones": [
          {
            "nombre": "Thiago Almada",
            "minuto": "68'"
          },
          {
            "nombre": "Nicolás González",
            "minuto": "90'+5'"
          }
        ]
      }
    },
    {
      "miEquipo": {
        "nombre": "URU",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/uru.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 1,
        "disparoAGol": "2",
        "tirosRealizados": "8",
        "faltas": "11",
        "tarjetasAmarillas": "2",
        "tarjetasRojas": "0",
        "tirosEsquina": "2",
        "salvadas": "2",
        "anotaciones": [
          {
            "nombre": "Federico Valverde",
            "minuto": "55'"
          }
        ]
      },
      "adversario": {
        "nombre": "BRA",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/bra.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 1,
        "disparoAGol": "3",
        "tirosRealizados": "18",
        "faltas": "15",
        "tarjetasAmarillas": "3",
        "tarjetasRojas": "0",
        "tirosEsquina": "4",
        "salvadas": "1",
        "anotaciones": [
          {
            "nombre": "Gerson",
            "minuto": "62'"
          }
        ]
      }
    },
    {
      "miEquipo": {
        "nombre": "URU",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/uru.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 3,
        "disparoAGol": "5",
        "tirosRealizados": "10",
        "faltas": "18",
        "tarjetasAmarillas": "4",
        "tarjetasRojas": "0",
        "tirosEsquina": "6",
        "salvadas": "2",
        "anotaciones": [
          {
            "nombre": "Davinson Sánchez",
            "minuto": "57' EC"
          },
          {
            "nombre": "Rodrigo Aguirre",
            "minuto": "60'"
          },
          {
            "nombre": "Manuel Ugarte",
            "minuto": "90'+11'"
          }
        ]
      },
      "adversario": {
        "nombre": "COL",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/col.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 2,
        "disparoAGol": "4",
        "tirosRealizados": "10",
        "faltas": "14",
        "tarjetasAmarillas": "2",
        "tarjetasRojas": "0",
        "tirosEsquina": "1",
        "salvadas": "3",
        "anotaciones": [
          {
            "nombre": "Juan Fernando Quintero",
            "minuto": "31'"
          },
          {
            "nombre": "Andres Gomez",
            "minuto": "90'+6'"
          }
        ]
      }
    },
    {
      "miEquipo": {
        "nombre": "URU",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/uru.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "4",
        "tirosRealizados": "11",
        "faltas": "14",
        "tarjetasAmarillas": "1",
        "tarjetasRojas": "0",
        "tirosEsquina": "6",
        "salvadas": "4",
        "anotaciones": []
      },
      "adversario": {
        "nombre": "ECU",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/ecu.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "4",
        "tirosRealizados": "8",
        "faltas": "12",
        "tarjetasAmarillas": "1",
        "tarjetasRojas": "0",
        "tirosEsquina": "5",
        "salvadas": "4",
        "anotaciones": []
      }
    },
    {
      "miEquipo": {
        "nombre": "URU",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/uru.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "3",
        "tirosRealizados": "8",
        "faltas": "6",
        "tarjetasAmarillas": "1",
        "tarjetasRojas": "0",
        "tirosEsquina": "2",
        "salvadas": "2",
        "anotaciones": []
      },
      "adversario": {
        "nombre": "Perú",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/per.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 1,
        "disparoAGol": "3",
        "tirosRealizados": "13",
        "faltas": "17",
        "tarjetasAmarillas": "0",
        "tarjetasRojas": "0",
        "tirosEsquina": "5",
        "salvadas": "3",
        "anotaciones": [
          {
            "nombre": "Miguel Araujo",
            "minuto": "88'"
          }
        ]
      }
    },
    {
      "miEquipo": {
        "nombre": "URU",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/uru.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "2",
        "tirosRealizados": "8",
        "faltas": "17",
        "tarjetasAmarillas": "4",
        "tarjetasRojas": "0",
        "tirosEsquina": "5",
        "salvadas": "6",
        "anotaciones": []
      },
      "adversario": {
        "nombre": "VEN",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/ven.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "6",
        "tirosRealizados": "20",
        "faltas": "7",
        "tarjetasAmarillas": "3",
        "tarjetasRojas": "0",
        "tirosEsquina": "5",
        "salvadas": "2",
        "anotaciones": []
      }
    },
    {
      "miEquipo": {
        "nombre": "URU",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/uru.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "1",
        "tirosRealizados": "12",
        "faltas": "13",
        "tarjetasAmarillas": "4",
        "tarjetasRojas": "0",
        "tirosEsquina": "8",
        "salvadas": "2",
        "anotaciones": []
      },
      "adversario": {
        "nombre": "PAR",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/par.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "2",
        "tirosRealizados": "8",
        "faltas": "11",
        "tarjetasAmarillas": "2",
        "tarjetasRojas": "0",
        "tirosEsquina": "0",
        "salvadas": "1",
        "anotaciones": []
      }
    },
    {
      "miEquipo": {
        "nombre": "URU",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/uru.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 1,
        "disparoAGol": "4",
        "tirosRealizados": "15",
        "faltas": "9",
        "tarjetasAmarillas": "2",
        "tarjetasRojas": "0",
        "tirosEsquina": "4",
        "salvadas": "1",
        "anotaciones": [
          {
            "nombre": "Lucas Pino",
            "minuto": "21'"
          }
        ]
      },
      "adversario": {
        "nombre": "GUA",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/gua.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 1,
        "disparoAGol": "2",
        "tirosRealizados": "9",
        "faltas": "11",
        "tarjetasAmarillas": "2",
        "tarjetasRojas": "0",
        "tirosEsquina": "1",
        "salvadas": "3",
        "anotaciones": [
          {
            "nombre": "Pedro Altán",
            "minuto": "67'"
          }
        ]
      }
    }
  ],
  "equipoB": [
    {
      "miEquipo": {
        "nombre": "VEN",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/ven.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 2,
        "disparoAGol": "5",
        "tirosRealizados": "10",
        "faltas": "12",
        "tarjetasAmarillas": "1",
        "tarjetasRojas": "0",
        "tirosEsquina": "5",
        "salvadas": "2",
        "anotaciones": [
          {
            "nombre": "Héctor Cuéllar",
            "minuto": "5' EC"
          },
          {
            "nombre": "Salomón Rondón",
            "minuto": "30'"
          }
        ]
      },
      "adversario": {
        "nombre": "BOL",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/bol.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "2",
        "tirosRealizados": "9",
        "faltas": "18",
        "tarjetasAmarillas": "2",
        "tarjetasRojas": "0",
        "tirosEsquina": "2",
        "salvadas": "4",
        "anotaciones": []
      }
    },
    {
      "miEquipo": {
        "nombre": "VEN",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/ven.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 1,
        "disparoAGol": "5",
        "tirosRealizados": "12",
        "faltas": "15",
        "tarjetasAmarillas": "3",
        "tarjetasRojas": "0",
        "tirosEsquina": "4",
        "salvadas": "1",
        "anotaciones": [
          {
            "nombre": "Salomón Rondón",
            "minuto": "41' Pen"
          }
        ]
      },
      "adversario": {
        "nombre": "Perú",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/per.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "1",
        "tirosRealizados": "11",
        "faltas": "14",
        "tarjetasAmarillas": "2",
        "tarjetasRojas": "0",
        "tirosEsquina": "1",
        "salvadas": "4",
        "anotaciones": []
      }
    },
    {
      "miEquipo": {
        "nombre": "VEN",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/ven.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 1,
        "disparoAGol": "6",
        "tirosRealizados": "10",
        "faltas": "13",
        "tarjetasAmarillas": "2",
        "tarjetasRojas": "0",
        "tirosEsquina": "2",
        "salvadas": "4",
        "anotaciones": [
          {
            "nombre": "Jhonder Cádiz",
            "minuto": "90'+1'"
          }
        ]
      },
      "adversario": {
        "nombre": "ECU",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/ecu.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 2,
        "disparoAGol": "6",
        "tirosRealizados": "16",
        "faltas": "13",
        "tarjetasAmarillas": "1",
        "tarjetasRojas": "0",
        "tirosEsquina": "6",
        "salvadas": "5",
        "anotaciones": [
          {
            "nombre": "Enner Valencia",
            "minuto": "39'"
          },
          {
            "nombre": "Enner Valencia",
            "minuto": "46'"
          }
        ]
      }
    },
    {
      "miEquipo": {
        "nombre": "VEN",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/ven.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 1,
        "disparoAGol": "3",
        "tirosRealizados": "11",
        "faltas": "8",
        "tarjetasAmarillas": "0",
        "tarjetasRojas": "0",
        "tirosEsquina": "4",
        "salvadas": "6",
        "anotaciones": [
          {
            "nombre": "Jorge Yriarte",
            "minuto": "68'"
          }
        ]
      },
      "adversario": {
        "nombre": "USA",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/usa.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 3,
        "disparoAGol": "10",
        "tirosRealizados": "15",
        "faltas": "14",
        "tarjetasAmarillas": "2",
        "tarjetasRojas": "0",
        "tirosEsquina": "8",
        "salvadas": "2",
        "anotaciones": [
          {
            "nombre": "Jack McGlynn",
            "minuto": "37'"
          },
          {
            "nombre": "Patrick Agyemang",
            "minuto": "39'"
          },
          {
            "nombre": "Matko Miljevic",
            "minuto": "64'"
          }
        ]
      }
    },
    {
      "miEquipo": {
        "nombre": "VEN",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/ven.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 2,
        "disparoAGol": "3",
        "tirosRealizados": "8",
        "faltas": "13",
        "tarjetasAmarillas": "3",
        "tarjetasRojas": "0",
        "tirosEsquina": "4",
        "salvadas": "2",
        "anotaciones": [
          {
            "nombre": "Jefferson Savarino",
            "minuto": "13'"
          },
          {
            "nombre": "Rubén Ramírez",
            "minuto": "22'"
          }
        ]
      },
      "adversario": {
        "nombre": "CHI",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/chi.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 4,
        "disparoAGol": "5",
        "tirosRealizados": "8",
        "faltas": "9",
        "tarjetasAmarillas": "1",
        "tarjetasRojas": "0",
        "tirosEsquina": "1",
        "salvadas": "1",
        "anotaciones": [
          {
            "nombre": "Eduardo Vargas",
            "minuto": "20'"
          },
          {
            "nombre": "Tomás Rincón",
            "minuto": "29' EC"
          },
          {
            "nombre": "Lucas Cepeda",
            "minuto": "38'"
          },
          {
            "nombre": "Lucas Cepeda",
            "minuto": "47'"
          }
        ]
      }
    },
    {
      "miEquipo": {
        "nombre": "VEN",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/ven.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 1,
        "disparoAGol": "5",
        "tirosRealizados": "12",
        "faltas": "14",
        "tarjetasAmarillas": "4",
        "tarjetasRojas": "1",
        "tirosEsquina": "3",
        "salvadas": "2",
        "anotaciones": [
          {
            "nombre": "Telasco Segovia",
            "minuto": "46'"
          },
          {
            "nombre": "Alexander González",
            "minuto": "89'"
          }
        ]
      },
      "adversario": {
        "nombre": "BRA",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/bra.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 1,
        "disparoAGol": "4",
        "tirosRealizados": "13",
        "faltas": "12",
        "tarjetasAmarillas": "2",
        "tarjetasRojas": "0",
        "tirosEsquina": "9",
        "salvadas": "3",
        "anotaciones": [
          {
            "nombre": "Raphinha",
            "minuto": "43'"
          }
        ]
      }
    },
    {
      "miEquipo": {
        "nombre": "VEN",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/ven.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 1,
        "disparoAGol": "3",
        "tirosRealizados": "6",
        "faltas": "17",
        "tarjetasAmarillas": "6",
        "tarjetasRojas": "0",
        "tirosEsquina": "1",
        "salvadas": "4",
        "anotaciones": [
          {
            "nombre": "Jon Aramburu",
            "minuto": "25'"
          }
        ]
      },
      "adversario": {
        "nombre": "PAR",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/par.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 2,
        "disparoAGol": "6",
        "tirosRealizados": "13",
        "faltas": "10",
        "tarjetasAmarillas": "2",
        "tarjetasRojas": "0",
        "tirosEsquina": "5",
        "salvadas": "2",
        "anotaciones": [
          {
            "nombre": "Antonio Sanabria",
            "minuto": "59'"
          },
          {
            "nombre": "Antonio Sanabria",
            "minuto": "74'"
          }
        ]
      }
    },
    {
      "miEquipo": {
        "nombre": "VEN",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/ven.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 1,
        "disparoAGol": "6",
        "tirosRealizados": "16",
        "faltas": "20",
        "tarjetasAmarillas": "1",
        "tarjetasRojas": "0",
        "tirosEsquina": "8",
        "salvadas": "3",
        "anotaciones": [
          {
            "nombre": "Salomón Rondón",
            "minuto": "65'"
          }
        ]
      },
      "adversario": {
        "nombre": "ARG",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/arg.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 1,
        "disparoAGol": "4",
        "tirosRealizados": "8",
        "faltas": "13",
        "tarjetasAmarillas": "1",
        "tarjetasRojas": "0",
        "tirosEsquina": "4",
        "salvadas": "5",
        "anotaciones": [
          {
            "nombre": "Nicolás Otamendi",
            "minuto": "13'"
          }
        ]
      }
    },
    {
      "miEquipo": {
        "nombre": "VEN",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/ven.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "6",
        "tirosRealizados": "20",
        "faltas": "7",
        "tarjetasAmarillas": "3",
        "tarjetasRojas": "0",
        "tirosEsquina": "5",
        "salvadas": "2",
        "anotaciones": []
      },
      "adversario": {
        "nombre": "URU",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/uru.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "2",
        "tirosRealizados": "8",
        "faltas": "17",
        "tarjetasAmarillas": "4",
        "tarjetasRojas": "0",
        "tirosEsquina": "5",
        "salvadas": "6",
        "anotaciones": []
      }
    },
    {
      "miEquipo": {
        "nombre": "VEN",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/ven.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "3",
        "tirosRealizados": "12",
        "faltas": "9",
        "tarjetasAmarillas": "2",
        "tarjetasRojas": "0",
        "tirosEsquina": "5",
        "salvadas": "4",
        "anotaciones": []
      },
      "adversario": {
        "nombre": "BOL",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/bol.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 4,
        "disparoAGol": "8",
        "tirosRealizados": "19",
        "faltas": "13",
        "tarjetasAmarillas": "3",
        "tarjetasRojas": "0",
        "tirosEsquina": "2",
        "salvadas": "3",
        "anotaciones": [
          {
            "nombre": "Ramiro Vaca",
            "minuto": "13'"
          },
          {
            "nombre": "Carmelo Algarañaz",
            "minuto": "45'+5' Pen"
          },
          {
            "nombre": "Miguel Terceros",
            "minuto": "46'"
          },
          {
            "nombre": "Enzo Monteiro",
            "minuto": "89'"
          }
        ]
      }
    }
  ],
  "estadisticas": {
    "ultimos10": {
      "equipoA": {
        "goles": {
          "promedios": {
            "moda": 0,
            "media": 0.5,
            "mediana": 0
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        },
        "disparoAGol": {
          "promedios": {
            "moda": 2,
            "media": 2.4,
            "mediana": 2
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        },
        "tirosRealizados": {
          "promedios": {
            "moda": 8,
            "media": 9.4,
            "mediana": 9
          },
          "minimos": {
            "moda": 5,
            "media": 5,
            "mediana": 5
          }
        },
        "tirosEsquina": {
          "promedios": {
            "moda": 2,
            "media": 4.7,
            "mediana": 4.5
          },
          "minimos": {
            "moda": 2,
            "media": 2,
            "mediana": 2
          }
        },
        "faltas": {
          "promedios": {
            "moda": 11,
            "media": 11.4,
            "mediana": 11
          },
          "minimos": {
            "moda": 5,
            "media": 5,
            "mediana": 5
          }
        },
        "tarjetasAmarillas": {
          "promedios": {
            "moda": 2,
            "media": 2.2,
            "mediana": 2
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        },
        "tarjetasRojas": {
          "promedios": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        },
        "salvadas": {
          "promedios": {
            "moda": 2,
            "media": 3.2,
            "mediana": 2.5
          },
          "minimos": {
            "moda": 1,
            "media": 1,
            "mediana": 1
          }
        }
      },
      "equipoB": {
        "goles": {
          "promedios": {
            "moda": 1,
            "media": 1,
            "mediana": 1
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        },
        "disparoAGol": {
          "promedios": {
            "moda": 3,
            "media": 4.5,
            "mediana": 5
          },
          "minimos": {
            "moda": 3,
            "media": 3,
            "mediana": 3
          }
        },
        "tirosRealizados": {
          "promedios": {
            "moda": 12,
            "media": 11.7,
            "mediana": 11.5
          },
          "minimos": {
            "moda": 6,
            "media": 6,
            "mediana": 6
          }
        },
        "tirosEsquina": {
          "promedios": {
            "moda": 4,
            "media": 4.1,
            "mediana": 4
          },
          "minimos": {
            "moda": 1,
            "media": 1,
            "mediana": 1
          }
        },
        "faltas": {
          "promedios": {
            "moda": 13,
            "media": 12.8,
            "mediana": 13
          },
          "minimos": {
            "moda": 7,
            "media": 7,
            "mediana": 7
          }
        },
        "tarjetasAmarillas": {
          "promedios": {
            "moda": 3,
            "media": 2.5,
            "mediana": 2.5
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        },
        "tarjetasRojas": {
          "promedios": {
            "moda": 0,
            "media": 0.1,
            "mediana": 0
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        },
        "salvadas": {
          "promedios": {
            "moda": 2,
            "media": 3,
            "mediana": 2.5
          },
          "minimos": {
            "moda": 1,
            "media": 1,
            "mediana": 1
          }
        }
      }
    },
    "ultimos5": {
      "equipoA": {
        "goles": {
          "promedios": {
            "moda": 0,
            "media": 0.8,
            "mediana": 0
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        },
        "disparoAGol": {
          "promedios": {
            "moda": 2,
            "media": 2,
            "mediana": 2
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        },
        "tirosRealizados": {
          "promedios": {
            "moda": 5,
            "media": 8,
            "mediana": 8
          },
          "minimos": {
            "moda": 5,
            "media": 5,
            "mediana": 5
          }
        },
        "tirosEsquina": {
          "promedios": {
            "moda": 2,
            "media": 4.4,
            "mediana": 4
          },
          "minimos": {
            "moda": 2,
            "media": 2,
            "mediana": 2
          }
        },
        "faltas": {
          "promedios": {
            "moda": 11,
            "media": 11,
            "mediana": 11
          },
          "minimos": {
            "moda": 5,
            "media": 5,
            "mediana": 5
          }
        },
        "tarjetasAmarillas": {
          "promedios": {
            "moda": 2,
            "media": 2,
            "mediana": 2
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        },
        "tarjetasRojas": {
          "promedios": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        },
        "salvadas": {
          "promedios": {
            "moda": 2,
            "media": 3.4,
            "mediana": 3
          },
          "minimos": {
            "moda": 2,
            "media": 2,
            "mediana": 2
          }
        }
      },
      "equipoB": {
        "goles": {
          "promedios": {
            "moda": 1,
            "media": 1.4,
            "mediana": 1
          },
          "minimos": {
            "moda": 1,
            "media": 1,
            "mediana": 1
          }
        },
        "disparoAGol": {
          "promedios": {
            "moda": 3,
            "media": 4.4,
            "mediana": 5
          },
          "minimos": {
            "moda": 3,
            "media": 3,
            "mediana": 3
          }
        },
        "tirosRealizados": {
          "promedios": {
            "moda": 10,
            "media": 10.2,
            "mediana": 10
          },
          "minimos": {
            "moda": 8,
            "media": 8,
            "mediana": 8
          }
        },
        "tirosEsquina": {
          "promedios": {
            "moda": 4,
            "media": 3.8,
            "mediana": 4
          },
          "minimos": {
            "moda": 2,
            "media": 2,
            "mediana": 2
          }
        },
        "faltas": {
          "promedios": {
            "moda": 13,
            "media": 12.2,
            "mediana": 13
          },
          "minimos": {
            "moda": 8,
            "media": 8,
            "mediana": 8
          }
        },
        "tarjetasAmarillas": {
          "promedios": {
            "moda": 3,
            "media": 1.8,
            "mediana": 2
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        },
        "tarjetasRojas": {
          "promedios": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        },
        "salvadas": {
          "promedios": {
            "moda": 2,
            "media": 3,
            "mediana": 2
          },
          "minimos": {
            "moda": 1,
            "media": 1,
            "mediana": 1
          }
        }
      }
    }
  }
}
    },
    {
        linkMatch: 'https://www.espn.com.co/futbol/numeritos/_/juegoId/684654',
        infoMatch:  {
  "equipoA": [
    {
      "miEquipo": {
        "nombre": "BOL",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/bol.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "2",
        "tirosRealizados": "9",
        "faltas": "18",
        "tarjetasAmarillas": "2",
        "tarjetasRojas": "0",
        "tirosEsquina": "2",
        "salvadas": "4",
        "anotaciones": []
      },
      "adversario": {
        "nombre": "VEN",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/ven.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 2,
        "disparoAGol": "5",
        "tirosRealizados": "10",
        "faltas": "12",
        "tarjetasAmarillas": "1",
        "tarjetasRojas": "0",
        "tirosEsquina": "5",
        "salvadas": "2",
        "anotaciones": [
          {
            "nombre": "Héctor Cuéllar",
            "minuto": "5' EC"
          },
          {
            "nombre": "Salomón Rondón",
            "minuto": "30'"
          }
        ]
      }
    },
    {
      "miEquipo": {
        "nombre": "BOL",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/bol.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "7",
        "tirosRealizados": "32",
        "faltas": "10",
        "tarjetasAmarillas": "1",
        "tarjetasRojas": "0",
        "tirosEsquina": "16",
        "salvadas": "0",
        "anotaciones": []
      },
      "adversario": {
        "nombre": "URU",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/uru.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "0",
        "tirosRealizados": "11",
        "faltas": "5",
        "tarjetasAmarillas": "2",
        "tarjetasRojas": "0",
        "tirosEsquina": "3",
        "salvadas": "7",
        "anotaciones": []
      }
    },
    {
      "miEquipo": {
        "nombre": "BOL",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/bol.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 1,
        "disparoAGol": "5",
        "tirosRealizados": "15",
        "faltas": "17",
        "tarjetasAmarillas": "0",
        "tarjetasRojas": "0",
        "tirosEsquina": "4",
        "salvadas": "4",
        "anotaciones": [
          {
            "nombre": "Miguel Terceros",
            "minuto": "58' Pen"
          }
        ]
      },
      "adversario": {
        "nombre": "Perú",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/per.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 3,
        "disparoAGol": "7",
        "tirosRealizados": "12",
        "faltas": "10",
        "tarjetasAmarillas": "0",
        "tarjetasRojas": "0",
        "tirosEsquina": "3",
        "salvadas": "4",
        "anotaciones": [
          {
            "nombre": "Andy Polo",
            "minuto": "37'"
          },
          {
            "nombre": "Paolo Guerrero",
            "minuto": "45'"
          },
          {
            "nombre": "Edison Flores",
            "minuto": "82'"
          }
        ]
      }
    },
    {
      "miEquipo": {
        "nombre": "BOL",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/bol.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 2,
        "disparoAGol": "5",
        "tirosRealizados": "11",
        "faltas": "7",
        "tarjetasAmarillas": "0",
        "tarjetasRojas": "1",
        "tirosEsquina": "4",
        "salvadas": "2",
        "anotaciones": [
          {
            "nombre": "Ervin Vaca",
            "minuto": "15'"
          },
          {
            "nombre": "Miguel Terceros",
            "minuto": "80' Pen"
          },
          {
            "nombre": "Adalid Terrazas",
            "minuto": "82'"
          }
        ]
      },
      "adversario": {
        "nombre": "PAR",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/par.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 2,
        "disparoAGol": "4",
        "tirosRealizados": "13",
        "faltas": "10",
        "tarjetasAmarillas": "0",
        "tarjetasRojas": "1",
        "tirosEsquina": "2",
        "salvadas": "3",
        "anotaciones": [
          {
            "nombre": "Miguel Almirón",
            "minuto": "71'"
          },
          {
            "nombre": "Julio Enciso",
            "minuto": "90'+1'"
          },
          {
            "nombre": "Diego Gómez",
            "minuto": "83'"
          }
        ]
      }
    },
    {
      "miEquipo": {
        "nombre": "BOL",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/bol.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "1",
        "tirosRealizados": "1",
        "faltas": "5",
        "tarjetasAmarillas": "1",
        "tarjetasRojas": "1",
        "tirosEsquina": "1",
        "salvadas": "11",
        "anotaciones": [
          {
            "nombre": "José Sagredo",
            "minuto": "24'"
          }
        ]
      },
      "adversario": {
        "nombre": "ECU",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/ecu.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 4,
        "disparoAGol": "15",
        "tirosRealizados": "28",
        "faltas": "13",
        "tarjetasAmarillas": "0",
        "tarjetasRojas": "0",
        "tirosEsquina": "12",
        "salvadas": "1",
        "anotaciones": [
          {
            "nombre": "Enner Valencia",
            "minuto": "26' Pen"
          },
          {
            "nombre": "Gonzalo Plata",
            "minuto": "28'"
          },
          {
            "nombre": "Gonzalo Plata",
            "minuto": "49'"
          },
          {
            "nombre": "Alan Minda",
            "minuto": "61'"
          }
        ]
      }
    },
    {
      "miEquipo": {
        "nombre": "BOL",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/bol.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "1",
        "tirosRealizados": "4",
        "faltas": "13",
        "tarjetasAmarillas": "1",
        "tarjetasRojas": "0",
        "tirosEsquina": "0",
        "salvadas": "4",
        "anotaciones": []
      },
      "adversario": {
        "nombre": "ARG",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/arg.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 6,
        "disparoAGol": "10",
        "tirosRealizados": "14",
        "faltas": "10",
        "tarjetasAmarillas": "0",
        "tarjetasRojas": "0",
        "tirosEsquina": "4",
        "salvadas": "1",
        "anotaciones": [
          {
            "nombre": "Lionel Messi",
            "minuto": "19'"
          },
          {
            "nombre": "Lionel Messi",
            "minuto": "84'"
          },
          {
            "nombre": "Lionel Messi",
            "minuto": "86'"
          },
          {
            "nombre": "Lautaro Martínez",
            "minuto": "43'"
          },
          {
            "nombre": "Julián Álvarez",
            "minuto": "45'+3'"
          },
          {
            "nombre": "Thiago Almada",
            "minuto": "69'"
          }
        ]
      }
    },
    {
      "miEquipo": {
        "nombre": "BOL",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/bol.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 1,
        "disparoAGol": "8",
        "tirosRealizados": "14",
        "faltas": "9",
        "tarjetasAmarillas": "1",
        "tarjetasRojas": "1",
        "tirosEsquina": "5",
        "salvadas": "9",
        "anotaciones": [
          {
            "nombre": "Miguel Terceros",
            "minuto": "58'"
          },
          {
            "nombre": "Héctor Cuéllar",
            "minuto": "20'"
          }
        ]
      },
      "adversario": {
        "nombre": "COL",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/col.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "9",
        "tirosRealizados": "20",
        "faltas": "8",
        "tarjetasAmarillas": "1",
        "tarjetasRojas": "0",
        "tirosEsquina": "9",
        "salvadas": "7",
        "anotaciones": []
      }
    },
    {
      "miEquipo": {
        "nombre": "BOL",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/bol.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 2,
        "disparoAGol": "2",
        "tirosRealizados": "5",
        "faltas": "10",
        "tarjetasAmarillas": "3",
        "tarjetasRojas": "0",
        "tirosEsquina": "2",
        "salvadas": "4",
        "anotaciones": [
          {
            "nombre": "Carmelo Algarañaz",
            "minuto": "13'"
          },
          {
            "nombre": "Miguel Terceros",
            "minuto": "45'+1'"
          }
        ]
      },
      "adversario": {
        "nombre": "CHI",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/chi.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 1,
        "disparoAGol": "5",
        "tirosRealizados": "19",
        "faltas": "11",
        "tarjetasAmarillas": "4",
        "tarjetasRojas": "0",
        "tirosEsquina": "10",
        "salvadas": "0",
        "anotaciones": [
          {
            "nombre": "Eduardo Vargas",
            "minuto": "39'"
          }
        ]
      }
    },
    {
      "miEquipo": {
        "nombre": "BOL",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/bol.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 4,
        "disparoAGol": "8",
        "tirosRealizados": "19",
        "faltas": "13",
        "tarjetasAmarillas": "3",
        "tarjetasRojas": "0",
        "tirosEsquina": "2",
        "salvadas": "3",
        "anotaciones": [
          {
            "nombre": "Ramiro Vaca",
            "minuto": "13'"
          },
          {
            "nombre": "Carmelo Algarañaz",
            "minuto": "45'+5' Pen"
          },
          {
            "nombre": "Miguel Terceros",
            "minuto": "46'"
          },
          {
            "nombre": "Enzo Monteiro",
            "minuto": "89'"
          }
        ]
      },
      "adversario": {
        "nombre": "VEN",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/ven.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "3",
        "tirosRealizados": "12",
        "faltas": "9",
        "tarjetasAmarillas": "2",
        "tarjetasRojas": "0",
        "tirosEsquina": "5",
        "salvadas": "4",
        "anotaciones": []
      }
    },
    {
      "miEquipo": {
        "nombre": "BOL",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/bol.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 1,
        "disparoAGol": "4",
        "tirosRealizados": "7",
        "faltas": "17",
        "tarjetasAmarillas": "2",
        "tarjetasRojas": "0",
        "tirosEsquina": "2",
        "salvadas": "3",
        "anotaciones": [
          {
            "nombre": "Bruno Miranda",
            "minuto": "69'"
          }
        ]
      },
      "adversario": {
        "nombre": "PAN",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/pan.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 3,
        "disparoAGol": "6",
        "tirosRealizados": "13",
        "faltas": "8",
        "tarjetasAmarillas": "1",
        "tarjetasRojas": "0",
        "tirosEsquina": "1",
        "salvadas": "2",
        "anotaciones": [
          {
            "nombre": "José Fajardo",
            "minuto": "22'"
          },
          {
            "nombre": "Eduardo Guerrero",
            "minuto": "79'"
          },
          {
            "nombre": "César Yanis",
            "minuto": "90'+1'"
          }
        ]
      }
    }
  ],
  "equipoB": [
    {
      "miEquipo": {
        "nombre": "CHI",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/chi.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "3",
        "tirosRealizados": "7",
        "faltas": "9",
        "tarjetasAmarillas": "4",
        "tarjetasRojas": "0",
        "tirosEsquina": "1",
        "salvadas": "3",
        "anotaciones": []
      },
      "adversario": {
        "nombre": "ARG",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/arg.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 1,
        "disparoAGol": "4",
        "tirosRealizados": "10",
        "faltas": "9",
        "tarjetasAmarillas": "2",
        "tarjetasRojas": "0",
        "tirosEsquina": "4",
        "salvadas": "3",
        "anotaciones": [
          {
            "nombre": "Julián Álvarez",
            "minuto": "16'"
          }
        ]
      }
    },
    {
      "miEquipo": {
        "nombre": "CHI",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/chi.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "2",
        "tirosRealizados": "16",
        "faltas": "15",
        "tarjetasAmarillas": "1",
        "tarjetasRojas": "0",
        "tirosEsquina": "2",
        "salvadas": "2",
        "anotaciones": []
      },
      "adversario": {
        "nombre": "ECU",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/ecu.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "2",
        "tirosRealizados": "7",
        "faltas": "15",
        "tarjetasAmarillas": "2",
        "tarjetasRojas": "0",
        "tirosEsquina": "2",
        "salvadas": "2",
        "anotaciones": []
      }
    },
    {
      "miEquipo": {
        "nombre": "CHI",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/chi.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "3",
        "tirosRealizados": "9",
        "faltas": "11",
        "tarjetasAmarillas": "0",
        "tarjetasRojas": "0",
        "tirosEsquina": "4",
        "salvadas": "4",
        "anotaciones": []
      },
      "adversario": {
        "nombre": "PAR",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/par.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 1,
        "disparoAGol": "5",
        "tirosRealizados": "16",
        "faltas": "10",
        "tarjetasAmarillas": "0",
        "tarjetasRojas": "0",
        "tirosEsquina": "6",
        "salvadas": "3",
        "anotaciones": [
          {
            "nombre": "Omar Alderete",
            "minuto": "60'"
          }
        ]
      }
    },
    {
      "miEquipo": {
        "nombre": "CHI",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/chi.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 6,
        "disparoAGol": "11",
        "tirosRealizados": "15",
        "faltas": "14",
        "tarjetasAmarillas": "5",
        "tarjetasRojas": "0",
        "tirosEsquina": "1",
        "salvadas": "0",
        "anotaciones": [
          {
            "nombre": "Nicolás Guerra",
            "minuto": "2'"
          },
          {
            "nombre": "Nicolás Guerra",
            "minuto": "25'"
          },
          {
            "nombre": "Nicolás Guerra",
            "minuto": "42'"
          },
          {
            "nombre": "Ariel Uribe",
            "minuto": "5'"
          },
          {
            "nombre": "Lucas Cepeda",
            "minuto": "53'"
          },
          {
            "nombre": "Stefan Pino",
            "minuto": "82'"
          }
        ]
      },
      "adversario": {
        "nombre": "PAN",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/pan.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 1,
        "disparoAGol": "1",
        "tirosRealizados": "11",
        "faltas": "11",
        "tarjetasAmarillas": "3",
        "tarjetasRojas": "0",
        "tirosEsquina": "2",
        "salvadas": "5",
        "anotaciones": [
          {
            "nombre": "Cecilio Waterman",
            "minuto": "30' Pen"
          }
        ]
      }
    },
    {
      "miEquipo": {
        "nombre": "CHI",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/chi.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 4,
        "disparoAGol": "5",
        "tirosRealizados": "8",
        "faltas": "9",
        "tarjetasAmarillas": "1",
        "tarjetasRojas": "0",
        "tirosEsquina": "1",
        "salvadas": "1",
        "anotaciones": [
          {
            "nombre": "Eduardo Vargas",
            "minuto": "20'"
          },
          {
            "nombre": "Tomás Rincón",
            "minuto": "29' EC"
          },
          {
            "nombre": "Lucas Cepeda",
            "minuto": "38'"
          },
          {
            "nombre": "Lucas Cepeda",
            "minuto": "47'"
          }
        ]
      },
      "adversario": {
        "nombre": "VEN",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/ven.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 2,
        "disparoAGol": "3",
        "tirosRealizados": "8",
        "faltas": "13",
        "tarjetasAmarillas": "3",
        "tarjetasRojas": "0",
        "tirosEsquina": "4",
        "salvadas": "2",
        "anotaciones": [
          {
            "nombre": "Jefferson Savarino",
            "minuto": "13'"
          },
          {
            "nombre": "Rubén Ramírez",
            "minuto": "22'"
          }
        ]
      }
    },
    {
      "miEquipo": {
        "nombre": "CHI",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/chi.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "5",
        "tirosRealizados": "13",
        "faltas": "11",
        "tarjetasAmarillas": "3",
        "tarjetasRojas": "0",
        "tirosEsquina": "8",
        "salvadas": "6",
        "anotaciones": []
      },
      "adversario": {
        "nombre": "Perú",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/per.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "6",
        "tirosRealizados": "13",
        "faltas": "10",
        "tarjetasAmarillas": "2",
        "tarjetasRojas": "0",
        "tirosEsquina": "4",
        "salvadas": "5",
        "anotaciones": []
      }
    },
    {
      "miEquipo": {
        "nombre": "CHI",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/chi.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "2",
        "tirosRealizados": "8",
        "faltas": "15",
        "tarjetasAmarillas": "2",
        "tarjetasRojas": "0",
        "tirosEsquina": "2",
        "salvadas": "5",
        "anotaciones": []
      },
      "adversario": {
        "nombre": "COL",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/col.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 4,
        "disparoAGol": "9",
        "tirosRealizados": "18",
        "faltas": "16",
        "tarjetasAmarillas": "2",
        "tarjetasRojas": "0",
        "tirosEsquina": "5",
        "salvadas": "2",
        "anotaciones": [
          {
            "nombre": "Davinson Sánchez",
            "minuto": "34'"
          },
          {
            "nombre": "Luis Díaz",
            "minuto": "52'"
          },
          {
            "nombre": "Jhon Durán",
            "minuto": "82'"
          },
          {
            "nombre": "Luis Sinisterra",
            "minuto": "90'+3'"
          }
        ]
      }
    },
    {
      "miEquipo": {
        "nombre": "CHI",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/chi.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 1,
        "disparoAGol": "1",
        "tirosRealizados": "7",
        "faltas": "14",
        "tarjetasAmarillas": "2",
        "tarjetasRojas": "0",
        "tirosEsquina": "4",
        "salvadas": "2",
        "anotaciones": [
          {
            "nombre": "Eduardo Vargas",
            "minuto": "2'"
          }
        ]
      },
      "adversario": {
        "nombre": "BRA",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/bra.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 2,
        "disparoAGol": "4",
        "tirosRealizados": "14",
        "faltas": "12",
        "tarjetasAmarillas": "2",
        "tarjetasRojas": "0",
        "tirosEsquina": "7",
        "salvadas": "0",
        "anotaciones": [
          {
            "nombre": "Igor Jesus",
            "minuto": "45'+1'"
          },
          {
            "nombre": "Luiz Henrique",
            "minuto": "89'"
          }
        ]
      }
    },
    {
      "miEquipo": {
        "nombre": "CHI",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/chi.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 1,
        "disparoAGol": "5",
        "tirosRealizados": "19",
        "faltas": "11",
        "tarjetasAmarillas": "4",
        "tarjetasRojas": "0",
        "tirosEsquina": "10",
        "salvadas": "0",
        "anotaciones": [
          {
            "nombre": "Eduardo Vargas",
            "minuto": "39'"
          }
        ]
      },
      "adversario": {
        "nombre": "BOL",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/bol.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 2,
        "disparoAGol": "2",
        "tirosRealizados": "5",
        "faltas": "10",
        "tarjetasAmarillas": "3",
        "tarjetasRojas": "0",
        "tirosEsquina": "2",
        "salvadas": "4",
        "anotaciones": [
          {
            "nombre": "Carmelo Algarañaz",
            "minuto": "13'"
          },
          {
            "nombre": "Miguel Terceros",
            "minuto": "45'+1'"
          }
        ]
      }
    },
    {
      "miEquipo": {
        "nombre": "CHI",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/chi.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "1",
        "tirosRealizados": "5",
        "faltas": "14",
        "tarjetasAmarillas": "3",
        "tarjetasRojas": "0",
        "tirosEsquina": "4",
        "salvadas": "5",
        "anotaciones": []
      },
      "adversario": {
        "nombre": "ARG",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/arg.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 3,
        "disparoAGol": "8",
        "tirosRealizados": "16",
        "faltas": "8",
        "tarjetasAmarillas": "2",
        "tarjetasRojas": "0",
        "tirosEsquina": "4",
        "salvadas": "1",
        "anotaciones": [
          {
            "nombre": "Alexis Mac Allister",
            "minuto": "48'"
          },
          {
            "nombre": "Julián Álvarez",
            "minuto": "84'"
          },
          {
            "nombre": "Paulo Dybala",
            "minuto": "90'+1'"
          }
        ]
      }
    }
  ],
  "estadisticas": {
    "ultimos10": {
      "equipoA": {
        "goles": {
          "promedios": {
            "moda": 0,
            "media": 1.1,
            "mediana": 1
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        },
        "disparoAGol": {
          "promedios": {
            "moda": 1,
            "media": 4.3,
            "mediana": 4.5
          },
          "minimos": {
            "moda": 1,
            "media": 1,
            "mediana": 1
          }
        },
        "tirosRealizados": {
          "promedios": {
            "moda": 1,
            "media": 11.7,
            "mediana": 10
          },
          "minimos": {
            "moda": 1,
            "media": 1,
            "mediana": 1
          }
        },
        "tirosEsquina": {
          "promedios": {
            "moda": 2,
            "media": 3.8,
            "mediana": 2
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        },
        "faltas": {
          "promedios": {
            "moda": 10,
            "media": 11.9,
            "mediana": 11.5
          },
          "minimos": {
            "moda": 5,
            "media": 5,
            "mediana": 5
          }
        },
        "tarjetasAmarillas": {
          "promedios": {
            "moda": 1,
            "media": 1.4,
            "mediana": 1
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        },
        "tarjetasRojas": {
          "promedios": {
            "moda": 0,
            "media": 0.3,
            "mediana": 0
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        },
        "salvadas": {
          "promedios": {
            "moda": 4,
            "media": 4.4,
            "mediana": 4
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        }
      },
      "equipoB": {
        "goles": {
          "promedios": {
            "moda": 0,
            "media": 1.2,
            "mediana": 0
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        },
        "disparoAGol": {
          "promedios": {
            "moda": 5,
            "media": 3.8,
            "mediana": 3
          },
          "minimos": {
            "moda": 1,
            "media": 1,
            "mediana": 1
          }
        },
        "tirosRealizados": {
          "promedios": {
            "moda": 7,
            "media": 10.7,
            "mediana": 8.5
          },
          "minimos": {
            "moda": 5,
            "media": 5,
            "mediana": 5
          }
        },
        "tirosEsquina": {
          "promedios": {
            "moda": 1,
            "media": 3.7,
            "mediana": 3
          },
          "minimos": {
            "moda": 1,
            "media": 1,
            "mediana": 1
          }
        },
        "faltas": {
          "promedios": {
            "moda": 11,
            "media": 12.3,
            "mediana": 12.5
          },
          "minimos": {
            "moda": 9,
            "media": 9,
            "mediana": 9
          }
        },
        "tarjetasAmarillas": {
          "promedios": {
            "moda": 1,
            "media": 2.5,
            "mediana": 2.5
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        },
        "tarjetasRojas": {
          "promedios": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        },
        "salvadas": {
          "promedios": {
            "moda": 0,
            "media": 2.8,
            "mediana": 2.5
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        }
      }
    },
    "ultimos5": {
      "equipoA": {
        "goles": {
          "promedios": {
            "moda": 0,
            "media": 0.6,
            "mediana": 0
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        },
        "disparoAGol": {
          "promedios": {
            "moda": 5,
            "media": 4,
            "mediana": 5
          },
          "minimos": {
            "moda": 1,
            "media": 1,
            "mediana": 1
          }
        },
        "tirosRealizados": {
          "promedios": {
            "moda": 1,
            "media": 13.6,
            "mediana": 11
          },
          "minimos": {
            "moda": 1,
            "media": 1,
            "mediana": 1
          }
        },
        "tirosEsquina": {
          "promedios": {
            "moda": 4,
            "media": 5.4,
            "mediana": 4
          },
          "minimos": {
            "moda": 1,
            "media": 1,
            "mediana": 1
          }
        },
        "faltas": {
          "promedios": {
            "moda": 5,
            "media": 11.4,
            "mediana": 10
          },
          "minimos": {
            "moda": 5,
            "media": 5,
            "mediana": 5
          }
        },
        "tarjetasAmarillas": {
          "promedios": {
            "moda": 0,
            "media": 0.8,
            "mediana": 1
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        },
        "tarjetasRojas": {
          "promedios": {
            "moda": 0,
            "media": 0.4,
            "mediana": 0
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        },
        "salvadas": {
          "promedios": {
            "moda": 4,
            "media": 4.2,
            "mediana": 4
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        }
      },
      "equipoB": {
        "goles": {
          "promedios": {
            "moda": 0,
            "media": 2,
            "mediana": 0
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        },
        "disparoAGol": {
          "promedios": {
            "moda": 3,
            "media": 4.8,
            "mediana": 3
          },
          "minimos": {
            "moda": 2,
            "media": 2,
            "mediana": 2
          }
        },
        "tirosRealizados": {
          "promedios": {
            "moda": 7,
            "media": 11,
            "mediana": 9
          },
          "minimos": {
            "moda": 7,
            "media": 7,
            "mediana": 7
          }
        },
        "tirosEsquina": {
          "promedios": {
            "moda": 1,
            "media": 1.8,
            "mediana": 1
          },
          "minimos": {
            "moda": 1,
            "media": 1,
            "mediana": 1
          }
        },
        "faltas": {
          "promedios": {
            "moda": 9,
            "media": 11.6,
            "mediana": 11
          },
          "minimos": {
            "moda": 9,
            "media": 9,
            "mediana": 9
          }
        },
        "tarjetasAmarillas": {
          "promedios": {
            "moda": 1,
            "media": 2.2,
            "mediana": 1
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        },
        "tarjetasRojas": {
          "promedios": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        },
        "salvadas": {
          "promedios": {
            "moda": 0,
            "media": 2,
            "mediana": 2
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        }
      }
    }
  }
}
    },
    {
        linkMatch: 'https://www.espn.com.co/futbol/numeritos/_/juegoId/684653',
        infoMatch: {
  "equipoA": [
    {
      "miEquipo": {
        "nombre": "ARG",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/arg.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 1,
        "disparoAGol": "4",
        "tirosRealizados": "10",
        "faltas": "9",
        "tarjetasAmarillas": "2",
        "tarjetasRojas": "0",
        "tirosEsquina": "4",
        "salvadas": "3",
        "anotaciones": [
          {
            "nombre": "Julián Álvarez",
            "minuto": "16'"
          }
        ]
      },
      "adversario": {
        "nombre": "CHI",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/chi.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "3",
        "tirosRealizados": "7",
        "faltas": "9",
        "tarjetasAmarillas": "4",
        "tarjetasRojas": "0",
        "tirosEsquina": "1",
        "salvadas": "3",
        "anotaciones": []
      }
    },
    {
      "miEquipo": {
        "nombre": "ARG",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/arg.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 4,
        "disparoAGol": "7",
        "tirosRealizados": "12",
        "faltas": "12",
        "tarjetasAmarillas": "5",
        "tarjetasRojas": "0",
        "tirosEsquina": "6",
        "salvadas": "0",
        "anotaciones": [
          {
            "nombre": "Julián Álvarez",
            "minuto": "4'"
          },
          {
            "nombre": "Enzo Fernández",
            "minuto": "12'"
          },
          {
            "nombre": "Alexis Mac Allister",
            "minuto": "37'"
          },
          {
            "nombre": "Giuliano Simeone",
            "minuto": "71'"
          }
        ]
      },
      "adversario": {
        "nombre": "BRA",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/bra.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 1,
        "disparoAGol": "1",
        "tirosRealizados": "3",
        "faltas": "19",
        "tarjetasAmarillas": "5",
        "tarjetasRojas": "0",
        "tirosEsquina": "0",
        "salvadas": "3",
        "anotaciones": [
          {
            "nombre": "Matheus Cunha",
            "minuto": "26'"
          }
        ]
      }
    },
    {
      "miEquipo": {
        "nombre": "ARG",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/arg.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 1,
        "disparoAGol": "4",
        "tirosRealizados": "12",
        "faltas": "11",
        "tarjetasAmarillas": "1",
        "tarjetasRojas": "1",
        "tirosEsquina": "3",
        "salvadas": "2",
        "anotaciones": [
          {
            "nombre": "Thiago Almada",
            "minuto": "68'"
          },
          {
            "nombre": "Nicolás González",
            "minuto": "90'+5'"
          }
        ]
      },
      "adversario": {
        "nombre": "URU",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/uru.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "2",
        "tirosRealizados": "6",
        "faltas": "11",
        "tarjetasAmarillas": "2",
        "tarjetasRojas": "0",
        "tirosEsquina": "4",
        "salvadas": "3",
        "anotaciones": []
      }
    },
    {
      "miEquipo": {
        "nombre": "ARG",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/arg.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 1,
        "disparoAGol": "3",
        "tirosRealizados": "11",
        "faltas": "10",
        "tarjetasAmarillas": "0",
        "tarjetasRojas": "0",
        "tirosEsquina": "2",
        "salvadas": "0",
        "anotaciones": [
          {
            "nombre": "Lautaro Martínez",
            "minuto": "55'"
          }
        ]
      },
      "adversario": {
        "nombre": "Perú",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/per.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "0",
        "tirosRealizados": "2",
        "faltas": "18",
        "tarjetasAmarillas": "3",
        "tarjetasRojas": "0",
        "tirosEsquina": "1",
        "salvadas": "2",
        "anotaciones": []
      }
    },
    {
      "miEquipo": {
        "nombre": "ARG",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/arg.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 1,
        "disparoAGol": "1",
        "tirosRealizados": "9",
        "faltas": "9",
        "tarjetasAmarillas": "1",
        "tarjetasRojas": "0",
        "tirosEsquina": "2",
        "salvadas": "0",
        "anotaciones": [
          {
            "nombre": "Lautaro Martínez",
            "minuto": "11'"
          }
        ]
      },
      "adversario": {
        "nombre": "PAR",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/par.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 2,
        "disparoAGol": "2",
        "tirosRealizados": "8",
        "faltas": "17",
        "tarjetasAmarillas": "3",
        "tarjetasRojas": "0",
        "tirosEsquina": "6",
        "salvadas": "0",
        "anotaciones": [
          {
            "nombre": "Antonio Sanabria",
            "minuto": "19'"
          },
          {
            "nombre": "Omar Alderete",
            "minuto": "47'"
          }
        ]
      }
    },
    {
      "miEquipo": {
        "nombre": "ARG",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/arg.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 6,
        "disparoAGol": "10",
        "tirosRealizados": "14",
        "faltas": "10",
        "tarjetasAmarillas": "0",
        "tarjetasRojas": "0",
        "tirosEsquina": "4",
        "salvadas": "1",
        "anotaciones": [
          {
            "nombre": "Lionel Messi",
            "minuto": "19'"
          },
          {
            "nombre": "Lionel Messi",
            "minuto": "84'"
          },
          {
            "nombre": "Lionel Messi",
            "minuto": "86'"
          },
          {
            "nombre": "Lautaro Martínez",
            "minuto": "43'"
          },
          {
            "nombre": "Julián Álvarez",
            "minuto": "45'+3'"
          },
          {
            "nombre": "Thiago Almada",
            "minuto": "69'"
          }
        ]
      },
      "adversario": {
        "nombre": "BOL",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/bol.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "1",
        "tirosRealizados": "4",
        "faltas": "13",
        "tarjetasAmarillas": "1",
        "tarjetasRojas": "0",
        "tirosEsquina": "0",
        "salvadas": "4",
        "anotaciones": []
      }
    },
    {
      "miEquipo": {
        "nombre": "ARG",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/arg.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 1,
        "disparoAGol": "4",
        "tirosRealizados": "8",
        "faltas": "13",
        "tarjetasAmarillas": "1",
        "tarjetasRojas": "0",
        "tirosEsquina": "4",
        "salvadas": "5",
        "anotaciones": [
          {
            "nombre": "Nicolás Otamendi",
            "minuto": "13'"
          }
        ]
      },
      "adversario": {
        "nombre": "VEN",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/ven.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 1,
        "disparoAGol": "6",
        "tirosRealizados": "16",
        "faltas": "20",
        "tarjetasAmarillas": "1",
        "tarjetasRojas": "0",
        "tirosEsquina": "8",
        "salvadas": "3",
        "anotaciones": [
          {
            "nombre": "Salomón Rondón",
            "minuto": "65'"
          }
        ]
      }
    },
    {
      "miEquipo": {
        "nombre": "ARG",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/arg.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 1,
        "disparoAGol": "1",
        "tirosRealizados": "13",
        "faltas": "10",
        "tarjetasAmarillas": "2",
        "tarjetasRojas": "0",
        "tirosEsquina": "4",
        "salvadas": "2",
        "anotaciones": [
          {
            "nombre": "Nicolás González",
            "minuto": "48'"
          }
        ]
      },
      "adversario": {
        "nombre": "COL",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/col.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 2,
        "disparoAGol": "5",
        "tirosRealizados": "9",
        "faltas": "8",
        "tarjetasAmarillas": "2",
        "tarjetasRojas": "0",
        "tirosEsquina": "2",
        "salvadas": "0",
        "anotaciones": [
          {
            "nombre": "Yerson Mosquera",
            "minuto": "25'"
          },
          {
            "nombre": "James Rodríguez",
            "minuto": "60' Pen"
          }
        ]
      }
    },
    {
      "miEquipo": {
        "nombre": "ARG",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/arg.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 3,
        "disparoAGol": "8",
        "tirosRealizados": "16",
        "faltas": "8",
        "tarjetasAmarillas": "2",
        "tarjetasRojas": "0",
        "tirosEsquina": "4",
        "salvadas": "1",
        "anotaciones": [
          {
            "nombre": "Alexis Mac Allister",
            "minuto": "48'"
          },
          {
            "nombre": "Julián Álvarez",
            "minuto": "84'"
          },
          {
            "nombre": "Paulo Dybala",
            "minuto": "90'+1'"
          }
        ]
      },
      "adversario": {
        "nombre": "CHI",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/chi.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "1",
        "tirosRealizados": "5",
        "faltas": "14",
        "tarjetasAmarillas": "3",
        "tarjetasRojas": "0",
        "tirosEsquina": "4",
        "salvadas": "5",
        "anotaciones": []
      }
    },
    {
      "miEquipo": {
        "nombre": "ARG",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/arg.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 2,
        "disparoAGol": "3",
        "tirosRealizados": "11",
        "faltas": "5",
        "tarjetasAmarillas": "1",
        "tarjetasRojas": "0",
        "tirosEsquina": "2",
        "salvadas": "2",
        "anotaciones": [
          {
            "nombre": "Julián Álvarez",
            "minuto": "22'"
          },
          {
            "nombre": "Lionel Messi",
            "minuto": "51'"
          }
        ]
      },
      "adversario": {
        "nombre": "CAN",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/can.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "2",
        "tirosRealizados": "9",
        "faltas": "15",
        "tarjetasAmarillas": "3",
        "tarjetasRojas": "0",
        "tirosEsquina": "2",
        "salvadas": "1",
        "anotaciones": []
      }
    }
  ],
  "equipoB": [
    {
      "miEquipo": {
        "nombre": "COL",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/col.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "0",
        "tirosRealizados": "15",
        "faltas": "10",
        "tarjetasAmarillas": "1",
        "tarjetasRojas": "0",
        "tirosEsquina": "2",
        "salvadas": "1",
        "anotaciones": []
      },
      "adversario": {
        "nombre": "Perú",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/per.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "1",
        "tirosRealizados": "4",
        "faltas": "5",
        "tarjetasAmarillas": "1",
        "tarjetasRojas": "0",
        "tirosEsquina": "4",
        "salvadas": "0",
        "anotaciones": []
      }
    },
    {
      "miEquipo": {
        "nombre": "COL",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/col.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 2,
        "disparoAGol": "5",
        "tirosRealizados": "10",
        "faltas": "13",
        "tarjetasAmarillas": "2",
        "tarjetasRojas": "0",
        "tirosEsquina": "5",
        "salvadas": "3",
        "anotaciones": [
          {
            "nombre": "Luis Díaz",
            "minuto": "1'"
          },
          {
            "nombre": "Jhon Durán",
            "minuto": "13'"
          }
        ]
      },
      "adversario": {
        "nombre": "PAR",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/par.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 2,
        "disparoAGol": "6",
        "tirosRealizados": "21",
        "faltas": "13",
        "tarjetasAmarillas": "4",
        "tarjetasRojas": "0",
        "tirosEsquina": "4",
        "salvadas": "3",
        "anotaciones": [
          {
            "nombre": "Júnior Alonso",
            "minuto": "45'+4'"
          },
          {
            "nombre": "Julio Enciso",
            "minuto": "62'"
          }
        ]
      }
    },
    {
      "miEquipo": {
        "nombre": "COL",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/col.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 1,
        "disparoAGol": "3",
        "tirosRealizados": "10",
        "faltas": "24",
        "tarjetasAmarillas": "1",
        "tarjetasRojas": "0",
        "tirosEsquina": "2",
        "salvadas": "5",
        "anotaciones": [
          {
            "nombre": "Luis Díaz",
            "minuto": "41'"
          }
        ]
      },
      "adversario": {
        "nombre": "BRA",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/bra.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 2,
        "disparoAGol": "7",
        "tirosRealizados": "17",
        "faltas": "15",
        "tarjetasAmarillas": "3",
        "tarjetasRojas": "0",
        "tirosEsquina": "4",
        "salvadas": "2",
        "anotaciones": [
          {
            "nombre": "Raphinha",
            "minuto": "6' Pen"
          },
          {
            "nombre": "Vinícius Júnior",
            "minuto": "90'+9'"
          }
        ]
      }
    },
    {
      "miEquipo": {
        "nombre": "COL",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/col.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "7",
        "tirosRealizados": "25",
        "faltas": "12",
        "tarjetasAmarillas": "3",
        "tarjetasRojas": "0",
        "tirosEsquina": "5",
        "salvadas": "0",
        "anotaciones": []
      },
      "adversario": {
        "nombre": "ECU",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/ecu.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 1,
        "disparoAGol": "1",
        "tirosRealizados": "4",
        "faltas": "11",
        "tarjetasAmarillas": "2",
        "tarjetasRojas": "1",
        "tirosEsquina": "2",
        "salvadas": "7",
        "anotaciones": [
          {
            "nombre": "Enner Valencia",
            "minuto": "7'"
          },
          {
            "nombre": "Piero Hincapié",
            "minuto": "34'"
          }
        ]
      }
    },
    {
      "miEquipo": {
        "nombre": "COL",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/col.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 2,
        "disparoAGol": "4",
        "tirosRealizados": "10",
        "faltas": "14",
        "tarjetasAmarillas": "2",
        "tarjetasRojas": "0",
        "tirosEsquina": "1",
        "salvadas": "3",
        "anotaciones": [
          {
            "nombre": "Juan Fernando Quintero",
            "minuto": "31'"
          },
          {
            "nombre": "Andres Gomez",
            "minuto": "90'+6'"
          }
        ]
      },
      "adversario": {
        "nombre": "URU",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/uru.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 3,
        "disparoAGol": "5",
        "tirosRealizados": "10",
        "faltas": "18",
        "tarjetasAmarillas": "4",
        "tarjetasRojas": "0",
        "tirosEsquina": "6",
        "salvadas": "2",
        "anotaciones": [
          {
            "nombre": "Davinson Sánchez",
            "minuto": "57' EC"
          },
          {
            "nombre": "Rodrigo Aguirre",
            "minuto": "60'"
          },
          {
            "nombre": "Manuel Ugarte",
            "minuto": "90'+11'"
          }
        ]
      }
    },
    {
      "miEquipo": {
        "nombre": "COL",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/col.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 4,
        "disparoAGol": "9",
        "tirosRealizados": "18",
        "faltas": "16",
        "tarjetasAmarillas": "2",
        "tarjetasRojas": "0",
        "tirosEsquina": "5",
        "salvadas": "2",
        "anotaciones": [
          {
            "nombre": "Davinson Sánchez",
            "minuto": "34'"
          },
          {
            "nombre": "Luis Díaz",
            "minuto": "52'"
          },
          {
            "nombre": "Jhon Durán",
            "minuto": "82'"
          },
          {
            "nombre": "Luis Sinisterra",
            "minuto": "90'+3'"
          }
        ]
      },
      "adversario": {
        "nombre": "CHI",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/chi.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "2",
        "tirosRealizados": "8",
        "faltas": "15",
        "tarjetasAmarillas": "2",
        "tarjetasRojas": "0",
        "tirosEsquina": "2",
        "salvadas": "5",
        "anotaciones": []
      }
    },
    {
      "miEquipo": {
        "nombre": "COL",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/col.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "9",
        "tirosRealizados": "20",
        "faltas": "8",
        "tarjetasAmarillas": "1",
        "tarjetasRojas": "0",
        "tirosEsquina": "9",
        "salvadas": "7",
        "anotaciones": []
      },
      "adversario": {
        "nombre": "BOL",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/bol.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 1,
        "disparoAGol": "8",
        "tirosRealizados": "14",
        "faltas": "9",
        "tarjetasAmarillas": "1",
        "tarjetasRojas": "1",
        "tirosEsquina": "5",
        "salvadas": "9",
        "anotaciones": [
          {
            "nombre": "Miguel Terceros",
            "minuto": "58'"
          },
          {
            "nombre": "Héctor Cuéllar",
            "minuto": "20'"
          }
        ]
      }
    },
    {
      "miEquipo": {
        "nombre": "COL",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/col.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 2,
        "disparoAGol": "5",
        "tirosRealizados": "9",
        "faltas": "8",
        "tarjetasAmarillas": "2",
        "tarjetasRojas": "0",
        "tirosEsquina": "2",
        "salvadas": "0",
        "anotaciones": [
          {
            "nombre": "Yerson Mosquera",
            "minuto": "25'"
          },
          {
            "nombre": "James Rodríguez",
            "minuto": "60' Pen"
          }
        ]
      },
      "adversario": {
        "nombre": "ARG",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/arg.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 1,
        "disparoAGol": "1",
        "tirosRealizados": "13",
        "faltas": "10",
        "tarjetasAmarillas": "2",
        "tarjetasRojas": "0",
        "tirosEsquina": "4",
        "salvadas": "2",
        "anotaciones": [
          {
            "nombre": "Nicolás González",
            "minuto": "48'"
          }
        ]
      }
    },
    {
      "miEquipo": {
        "nombre": "COL",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/col.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 1,
        "disparoAGol": "5",
        "tirosRealizados": "16",
        "faltas": "13",
        "tarjetasAmarillas": "2",
        "tarjetasRojas": "0",
        "tirosEsquina": "10",
        "salvadas": "2",
        "anotaciones": [
          {
            "nombre": "Luis Díaz",
            "minuto": "82'"
          }
        ]
      },
      "adversario": {
        "nombre": "Perú",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/per.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 1,
        "disparoAGol": "3",
        "tirosRealizados": "9",
        "faltas": "9",
        "tarjetasAmarillas": "0",
        "tarjetasRojas": "0",
        "tirosEsquina": "5",
        "salvadas": "4",
        "anotaciones": [
          {
            "nombre": "Alexander Callens",
            "minuto": "68'"
          }
        ]
      }
    },
    {
      "miEquipo": {
        "nombre": "COL",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/col.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 1,
        "disparoAGol": "4",
        "tirosRealizados": "11",
        "faltas": "13",
        "tarjetasAmarillas": "3",
        "tarjetasRojas": "1",
        "tirosEsquina": "3",
        "salvadas": "2",
        "anotaciones": [
          {
            "nombre": "Jefferson Lerma",
            "minuto": "39'"
          },
          {
            "nombre": "Daniel Muñoz",
            "minuto": "45'+1'"
          }
        ]
      },
      "adversario": {
        "nombre": "URU",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/uru.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "2",
        "tirosRealizados": "11",
        "faltas": "11",
        "tarjetasAmarillas": "3",
        "tarjetasRojas": "1",
        "tirosEsquina": "4",
        "salvadas": "3",
        "anotaciones": [
          {
            "nombre": "Gullermo Varela",
            "minuto": "90'+8'"
          }
        ]
      }
    }
  ],
  "estadisticas": {
    "ultimos10": {
      "equipoA": {
        "goles": {
          "promedios": {
            "moda": 1,
            "media": 2.1,
            "mediana": 1
          },
          "minimos": {
            "moda": 1,
            "media": 1,
            "mediana": 1
          }
        },
        "disparoAGol": {
          "promedios": {
            "moda": 4,
            "media": 4.5,
            "mediana": 4
          },
          "minimos": {
            "moda": 1,
            "media": 1,
            "mediana": 1
          }
        },
        "tirosRealizados": {
          "promedios": {
            "moda": 11,
            "media": 11.6,
            "mediana": 11.5
          },
          "minimos": {
            "moda": 8,
            "media": 8,
            "mediana": 8
          }
        },
        "tirosEsquina": {
          "promedios": {
            "moda": 4,
            "media": 3.5,
            "mediana": 4
          },
          "minimos": {
            "moda": 2,
            "media": 2,
            "mediana": 2
          }
        },
        "faltas": {
          "promedios": {
            "moda": 10,
            "media": 9.7,
            "mediana": 10
          },
          "minimos": {
            "moda": 5,
            "media": 5,
            "mediana": 5
          }
        },
        "tarjetasAmarillas": {
          "promedios": {
            "moda": 1,
            "media": 1.5,
            "mediana": 1
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        },
        "tarjetasRojas": {
          "promedios": {
            "moda": 0,
            "media": 0.1,
            "mediana": 0
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        },
        "salvadas": {
          "promedios": {
            "moda": 0,
            "media": 1.6,
            "mediana": 1.5
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        }
      },
      "equipoB": {
        "goles": {
          "promedios": {
            "moda": 0,
            "media": 1.3,
            "mediana": 1
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        },
        "disparoAGol": {
          "promedios": {
            "moda": 5,
            "media": 5.1,
            "mediana": 5
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        },
        "tirosRealizados": {
          "promedios": {
            "moda": 10,
            "media": 14.4,
            "mediana": 13
          },
          "minimos": {
            "moda": 9,
            "media": 9,
            "mediana": 9
          }
        },
        "tirosEsquina": {
          "promedios": {
            "moda": 2,
            "media": 4.4,
            "mediana": 4
          },
          "minimos": {
            "moda": 1,
            "media": 1,
            "mediana": 1
          }
        },
        "faltas": {
          "promedios": {
            "moda": 13,
            "media": 13.1,
            "mediana": 13
          },
          "minimos": {
            "moda": 8,
            "media": 8,
            "mediana": 8
          }
        },
        "tarjetasAmarillas": {
          "promedios": {
            "moda": 2,
            "media": 1.9,
            "mediana": 2
          },
          "minimos": {
            "moda": 1,
            "media": 1,
            "mediana": 1
          }
        },
        "tarjetasRojas": {
          "promedios": {
            "moda": 0,
            "media": 0.1,
            "mediana": 0
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        },
        "salvadas": {
          "promedios": {
            "moda": 2,
            "media": 2.5,
            "mediana": 2
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        }
      }
    },
    "ultimos5": {
      "equipoA": {
        "goles": {
          "promedios": {
            "moda": 1,
            "media": 1.6,
            "mediana": 1
          },
          "minimos": {
            "moda": 1,
            "media": 1,
            "mediana": 1
          }
        },
        "disparoAGol": {
          "promedios": {
            "moda": 4,
            "media": 3.8,
            "mediana": 4
          },
          "minimos": {
            "moda": 1,
            "media": 1,
            "mediana": 1
          }
        },
        "tirosRealizados": {
          "promedios": {
            "moda": 12,
            "media": 10.8,
            "mediana": 11
          },
          "minimos": {
            "moda": 9,
            "media": 9,
            "mediana": 9
          }
        },
        "tirosEsquina": {
          "promedios": {
            "moda": 2,
            "media": 3.4,
            "mediana": 3
          },
          "minimos": {
            "moda": 2,
            "media": 2,
            "mediana": 2
          }
        },
        "faltas": {
          "promedios": {
            "moda": 9,
            "media": 10.2,
            "mediana": 10
          },
          "minimos": {
            "moda": 9,
            "media": 9,
            "mediana": 9
          }
        },
        "tarjetasAmarillas": {
          "promedios": {
            "moda": 1,
            "media": 1.8,
            "mediana": 1
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        },
        "tarjetasRojas": {
          "promedios": {
            "moda": 0,
            "media": 0.2,
            "mediana": 0
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        },
        "salvadas": {
          "promedios": {
            "moda": 0,
            "media": 1,
            "mediana": 0
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        }
      },
      "equipoB": {
        "goles": {
          "promedios": {
            "moda": 0,
            "media": 1,
            "mediana": 1
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        },
        "disparoAGol": {
          "promedios": {
            "moda": 0,
            "media": 3.8,
            "mediana": 4
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        },
        "tirosRealizados": {
          "promedios": {
            "moda": 10,
            "media": 14,
            "mediana": 10
          },
          "minimos": {
            "moda": 10,
            "media": 10,
            "mediana": 10
          }
        },
        "tirosEsquina": {
          "promedios": {
            "moda": 2,
            "media": 3,
            "mediana": 2
          },
          "minimos": {
            "moda": 1,
            "media": 1,
            "mediana": 1
          }
        },
        "faltas": {
          "promedios": {
            "moda": 10,
            "media": 14.6,
            "mediana": 13
          },
          "minimos": {
            "moda": 10,
            "media": 10,
            "mediana": 10
          }
        },
        "tarjetasAmarillas": {
          "promedios": {
            "moda": 1,
            "media": 1.8,
            "mediana": 2
          },
          "minimos": {
            "moda": 1,
            "media": 1,
            "mediana": 1
          }
        },
        "tarjetasRojas": {
          "promedios": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        },
        "salvadas": {
          "promedios": {
            "moda": 3,
            "media": 2.4,
            "mediana": 3
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        }
      }
    }
  }
}
},
    {
        linkMatch: 'https://www.espn.com.co/futbol/alineacion/_/juegoId/724961',
        infoMatch:  {
  "equipoA": [
    {
      "miEquipo": {
        "nombre": "BEL",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/bel.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 4,
        "disparoAGol": "4",
        "tirosRealizados": "18",
        "faltas": "13",
        "tarjetasAmarillas": "3",
        "tarjetasRojas": "0",
        "tirosEsquina": "7",
        "salvadas": "5",
        "anotaciones": [
          {
            "nombre": "Romelu Lukaku",
            "minuto": "15' Pen"
          },
          {
            "nombre": "Youri Tielemans",
            "minuto": "19'"
          },
          {
            "nombre": "Jérémy Doku",
            "minuto": "27'"
          },
          {
            "nombre": "Kevin De Bruyne",
            "minuto": "88'"
          }
        ]
      },
      "adversario": {
        "nombre": "GAL",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/wal.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 3,
        "disparoAGol": "8",
        "tirosRealizados": "12",
        "faltas": "9",
        "tarjetasAmarillas": "3",
        "tarjetasRojas": "0",
        "tirosEsquina": "5",
        "salvadas": "0",
        "anotaciones": [
          {
            "nombre": "Harry Wilson",
            "minuto": "45'+7' Pen"
          },
          {
            "nombre": "Sorba Thomas",
            "minuto": "51'"
          },
          {
            "nombre": "Brennan Johnson",
            "minuto": "69'"
          }
        ]
      }
    },
    {
      "miEquipo": {
        "nombre": "BEL",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/bel.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 1,
        "disparoAGol": "4",
        "tirosRealizados": "17",
        "faltas": "11",
        "tarjetasAmarillas": "1",
        "tarjetasRojas": "0",
        "tirosEsquina": "10",
        "salvadas": "1",
        "anotaciones": [
          {
            "nombre": "Maxim De Cuyper",
            "minuto": "28'"
          }
        ]
      },
      "adversario": {
        "nombre": "MKD",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/mkd.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 1,
        "disparoAGol": "2",
        "tirosRealizados": "7",
        "faltas": "13",
        "tarjetasAmarillas": "6",
        "tarjetasRojas": "0",
        "tirosEsquina": "1",
        "salvadas": "2",
        "anotaciones": [
          {
            "nombre": "Ezgjan Alioski",
            "minuto": "86'"
          }
        ]
      }
    },
    {
      "miEquipo": {
        "nombre": "BEL",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/bel.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 3,
        "disparoAGol": "6",
        "tirosRealizados": "19",
        "faltas": "10",
        "tarjetasAmarillas": "2",
        "tarjetasRojas": "0",
        "tirosEsquina": "10",
        "salvadas": "1",
        "anotaciones": [
          {
            "nombre": "Maxim De Cuyper",
            "minuto": "70'"
          },
          {
            "nombre": "Romelu Lukaku",
            "minuto": "75'"
          },
          {
            "nombre": "Romelu Lukaku",
            "minuto": "86'"
          }
        ]
      },
      "adversario": {
        "nombre": "UCR",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/ukr.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "1",
        "tirosRealizados": "6",
        "faltas": "9",
        "tarjetasAmarillas": "4",
        "tarjetasRojas": "0",
        "tirosEsquina": "1",
        "salvadas": "3",
        "anotaciones": []
      }
    },
    {
      "miEquipo": {
        "nombre": "BEL",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/bel.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 1,
        "disparoAGol": "4",
        "tirosRealizados": "8",
        "faltas": "10",
        "tarjetasAmarillas": "1",
        "tarjetasRojas": "0",
        "tirosEsquina": "4",
        "salvadas": "4",
        "anotaciones": [
          {
            "nombre": "Romelu Lukaku",
            "minuto": "40'"
          }
        ]
      },
      "adversario": {
        "nombre": "UCR",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/ukr.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 3,
        "disparoAGol": "7",
        "tirosRealizados": "12",
        "faltas": "7",
        "tarjetasAmarillas": "0",
        "tarjetasRojas": "0",
        "tirosEsquina": "3",
        "salvadas": "3",
        "anotaciones": [
          {
            "nombre": "Oleksii Hutsulyak",
            "minuto": "66'"
          },
          {
            "nombre": "Vladyslav Vanat",
            "minuto": "73'"
          },
          {
            "nombre": "Illia Zabarnyi",
            "minuto": "78'"
          }
        ]
      }
    },
    {
      "miEquipo": {
        "nombre": "BEL",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/bel.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "4",
        "tirosRealizados": "12",
        "faltas": "10",
        "tarjetasAmarillas": "3",
        "tarjetasRojas": "0",
        "tirosEsquina": "5",
        "salvadas": "3",
        "anotaciones": []
      },
      "adversario": {
        "nombre": "ISR",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/isr.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 1,
        "disparoAGol": "4",
        "tirosRealizados": "10",
        "faltas": "14",
        "tarjetasAmarillas": "2",
        "tarjetasRojas": "0",
        "tirosEsquina": "5",
        "salvadas": "4",
        "anotaciones": [
          {
            "nombre": "Yarden Shua",
            "minuto": "86'"
          }
        ]
      }
    },
    {
      "miEquipo": {
        "nombre": "BEL",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/bel.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "3",
        "tirosRealizados": "11",
        "faltas": "8",
        "tarjetasAmarillas": "3",
        "tarjetasRojas": "0",
        "tirosEsquina": "7",
        "salvadas": "2",
        "anotaciones": []
      },
      "adversario": {
        "nombre": "ITA",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/ita.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 1,
        "disparoAGol": "4",
        "tirosRealizados": "11",
        "faltas": "9",
        "tarjetasAmarillas": "2",
        "tarjetasRojas": "0",
        "tirosEsquina": "1",
        "salvadas": "3",
        "anotaciones": [
          {
            "nombre": "Sandro Tonali",
            "minuto": "11'"
          }
        ]
      }
    },
    {
      "miEquipo": {
        "nombre": "BEL",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/bel.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 1,
        "disparoAGol": "7",
        "tirosRealizados": "20",
        "faltas": "10",
        "tarjetasAmarillas": "3",
        "tarjetasRojas": "0",
        "tirosEsquina": "9",
        "salvadas": "2",
        "anotaciones": [
          {
            "nombre": "Loïs Openda",
            "minuto": "45'+3'"
          }
        ]
      },
      "adversario": {
        "nombre": "FRA",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/fra.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 2,
        "disparoAGol": "4",
        "tirosRealizados": "14",
        "faltas": "14",
        "tarjetasAmarillas": "4",
        "tarjetasRojas": "1",
        "tirosEsquina": "4",
        "salvadas": "6",
        "anotaciones": [
          {
            "nombre": "Randal Kolo Muani",
            "minuto": "35' Pen"
          },
          {
            "nombre": "Randal Kolo Muani",
            "minuto": "62'"
          },
          {
            "nombre": "Aurélien Tchouaméni",
            "minuto": "76'"
          }
        ]
      }
    },
    {
      "miEquipo": {
        "nombre": "BEL",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/bel.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 2,
        "disparoAGol": "4",
        "tirosRealizados": "12",
        "faltas": "15",
        "tarjetasAmarillas": "1",
        "tarjetasRojas": "0",
        "tirosEsquina": "12",
        "salvadas": "3",
        "anotaciones": [
          {
            "nombre": "Maxim De Cuyper",
            "minuto": "42'"
          },
          {
            "nombre": "Leandro Trossard",
            "minuto": "61'"
          }
        ]
      },
      "adversario": {
        "nombre": "ITA",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/ita.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 2,
        "disparoAGol": "4",
        "tirosRealizados": "8",
        "faltas": "11",
        "tarjetasAmarillas": "2",
        "tarjetasRojas": "1",
        "tirosEsquina": "0",
        "salvadas": "2",
        "anotaciones": [
          {
            "nombre": "Andrea Cambiaso",
            "minuto": "1'"
          },
          {
            "nombre": "Mateo Retegui",
            "minuto": "24'"
          },
          {
            "nombre": "Lorenzo Pellegrini",
            "minuto": "40'"
          }
        ]
      }
    },
    {
      "miEquipo": {
        "nombre": "BEL",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/bel.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "4",
        "tirosRealizados": "9",
        "faltas": "10",
        "tarjetasAmarillas": "2",
        "tarjetasRojas": "0",
        "tirosEsquina": "7",
        "salvadas": "7",
        "anotaciones": []
      },
      "adversario": {
        "nombre": "FRA",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/fra.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 2,
        "disparoAGol": "9",
        "tirosRealizados": "25",
        "faltas": "8",
        "tarjetasAmarillas": "2",
        "tarjetasRojas": "0",
        "tirosEsquina": "5",
        "salvadas": "4",
        "anotaciones": [
          {
            "nombre": "Randal Kolo Muani",
            "minuto": "29'"
          },
          {
            "nombre": "Ousmane Dembélé",
            "minuto": "57'"
          }
        ]
      }
    },
    {
      "miEquipo": {
        "nombre": "BEL",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/bel.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 3,
        "disparoAGol": "8",
        "tirosRealizados": "25",
        "faltas": "9",
        "tarjetasAmarillas": "1",
        "tarjetasRojas": "0",
        "tirosEsquina": "7",
        "salvadas": "2",
        "anotaciones": [
          {
            "nombre": "Kevin De Bruyne",
            "minuto": "21'"
          },
          {
            "nombre": "Kevin De Bruyne",
            "minuto": "52' Pen"
          },
          {
            "nombre": "Youri Tielemans",
            "minuto": "48'"
          }
        ]
      },
      "adversario": {
        "nombre": "ISR",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/isr.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 1,
        "disparoAGol": "2",
        "tirosRealizados": "10",
        "faltas": "7",
        "tarjetasAmarillas": "1",
        "tarjetasRojas": "0",
        "tirosEsquina": "1",
        "salvadas": "5",
        "anotaciones": [
          {
            "nombre": "Timothy Castagne",
            "minuto": "36' EC"
          }
        ]
      }
    }
  ],
  "equipoB": [
    {
      "miEquipo": {
        "nombre": "GAL",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/wal.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 3,
        "disparoAGol": "8",
        "tirosRealizados": "12",
        "faltas": "9",
        "tarjetasAmarillas": "3",
        "tarjetasRojas": "0",
        "tirosEsquina": "5",
        "salvadas": "0",
        "anotaciones": [
          {
            "nombre": "Harry Wilson",
            "minuto": "45'+7' Pen"
          },
          {
            "nombre": "Sorba Thomas",
            "minuto": "51'"
          },
          {
            "nombre": "Brennan Johnson",
            "minuto": "69'"
          }
        ]
      },
      "adversario": {
        "nombre": "BEL",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/bel.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 4,
        "disparoAGol": "4",
        "tirosRealizados": "18",
        "faltas": "13",
        "tarjetasAmarillas": "3",
        "tarjetasRojas": "0",
        "tirosEsquina": "7",
        "salvadas": "5",
        "anotaciones": [
          {
            "nombre": "Romelu Lukaku",
            "minuto": "15' Pen"
          },
          {
            "nombre": "Youri Tielemans",
            "minuto": "19'"
          },
          {
            "nombre": "Jérémy Doku",
            "minuto": "27'"
          },
          {
            "nombre": "Kevin De Bruyne",
            "minuto": "88'"
          }
        ]
      }
    },
    {
      "miEquipo": {
        "nombre": "GAL",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/wal.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 3,
        "disparoAGol": "11",
        "tirosRealizados": "26",
        "faltas": "9",
        "tarjetasAmarillas": "1",
        "tarjetasRojas": "0",
        "tirosEsquina": "12",
        "salvadas": "0",
        "anotaciones": [
          {
            "nombre": "Joe Rodon",
            "minuto": "39'"
          },
          {
            "nombre": "Harry Wilson",
            "minuto": "65'"
          },
          {
            "nombre": "Kieffer Moore",
            "minuto": "68'"
          }
        ]
      },
      "adversario": {
        "nombre": "LIE",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/lie.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "0",
        "tirosRealizados": "0",
        "faltas": "8",
        "tarjetasAmarillas": "2",
        "tarjetasRojas": "0",
        "tirosEsquina": "0",
        "salvadas": "8",
        "anotaciones": []
      }
    },
    {
      "miEquipo": {
        "nombre": "GAL",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/wal.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 1,
        "disparoAGol": "6",
        "tirosRealizados": "11",
        "faltas": "16",
        "tarjetasAmarillas": "2",
        "tarjetasRojas": "0",
        "tirosEsquina": "5",
        "salvadas": "1",
        "anotaciones": [
          {
            "nombre": "David Brooks",
            "minuto": "90'+6'"
          }
        ]
      },
      "adversario": {
        "nombre": "MKD",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/mkd.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 1,
        "disparoAGol": "2",
        "tirosRealizados": "8",
        "faltas": "10",
        "tarjetasAmarillas": "2",
        "tarjetasRojas": "0",
        "tirosEsquina": "5",
        "salvadas": "4",
        "anotaciones": [
          {
            "nombre": "Bojan Miovski",
            "minuto": "90'+1'"
          }
        ]
      }
    },
    {
      "miEquipo": {
        "nombre": "GAL",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/wal.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 3,
        "disparoAGol": "7",
        "tirosRealizados": "12",
        "faltas": "5",
        "tarjetasAmarillas": "0",
        "tarjetasRojas": "0",
        "tirosEsquina": "4",
        "salvadas": "1",
        "anotaciones": [
          {
            "nombre": "Daniel James",
            "minuto": "9'"
          },
          {
            "nombre": "Ben Davies",
            "minuto": "47'"
          },
          {
            "nombre": "Rabbi Matondo",
            "minuto": "90'"
          }
        ]
      },
      "adversario": {
        "nombre": "KAZ",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/kaz.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 1,
        "disparoAGol": "2",
        "tirosRealizados": "10",
        "faltas": "7",
        "tarjetasAmarillas": "2",
        "tarjetasRojas": "0",
        "tirosEsquina": "4",
        "salvadas": "4",
        "anotaciones": [
          {
            "nombre": "Askhat Tagybergen",
            "minuto": "32' Pen"
          }
        ]
      }
    },
    {
      "miEquipo": {
        "nombre": "GAL",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/wal.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 4,
        "disparoAGol": "10",
        "tirosRealizados": "16",
        "faltas": "10",
        "tarjetasAmarillas": "3",
        "tarjetasRojas": "0",
        "tirosEsquina": "7",
        "salvadas": "3",
        "anotaciones": [
          {
            "nombre": "Liam Cullen",
            "minuto": "32'"
          },
          {
            "nombre": "Liam Cullen",
            "minuto": "45'+1'"
          },
          {
            "nombre": "Brennan Johnson",
            "minuto": "65'"
          },
          {
            "nombre": "Harry Wilson",
            "minuto": "79'"
          }
        ]
      },
      "adversario": {
        "nombre": "ISL",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/isl.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 1,
        "disparoAGol": "5",
        "tirosRealizados": "11",
        "faltas": "14",
        "tarjetasAmarillas": "5",
        "tarjetasRojas": "0",
        "tirosEsquina": "2",
        "salvadas": "6",
        "anotaciones": [
          {
            "nombre": "Andri Gudjohnsen",
            "minuto": "7'"
          }
        ]
      }
    },
    {
      "miEquipo": {
        "nombre": "GAL",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/wal.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "1",
        "tirosRealizados": "4",
        "faltas": "10",
        "tarjetasAmarillas": "2",
        "tarjetasRojas": "0",
        "tirosEsquina": "2",
        "salvadas": "3",
        "anotaciones": []
      },
      "adversario": {
        "nombre": "TUR",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/tur.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "3",
        "tirosRealizados": "25",
        "faltas": "13",
        "tarjetasAmarillas": "1",
        "tarjetasRojas": "0",
        "tirosEsquina": "9",
        "salvadas": "1",
        "anotaciones": []
      }
    },
    {
      "miEquipo": {
        "nombre": "GAL",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/wal.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 1,
        "disparoAGol": "5",
        "tirosRealizados": "13",
        "faltas": "21",
        "tarjetasAmarillas": "0",
        "tarjetasRojas": "0",
        "tirosEsquina": "9",
        "salvadas": "0",
        "anotaciones": []
      },
      "adversario": {
        "nombre": "MNE",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/mtg.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "0",
        "tirosRealizados": "5",
        "faltas": "16",
        "tarjetasAmarillas": "4",
        "tarjetasRojas": "0",
        "tirosEsquina": "2",
        "salvadas": "4",
        "anotaciones": []
      }
    },
    {
      "miEquipo": {
        "nombre": "GAL",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/wal.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 2,
        "disparoAGol": "6",
        "tirosRealizados": "8",
        "faltas": "8",
        "tarjetasAmarillas": "5",
        "tarjetasRojas": "0",
        "tirosEsquina": "1",
        "salvadas": "2",
        "anotaciones": [
          {
            "nombre": "Brennan Johnson",
            "minuto": "11'"
          },
          {
            "nombre": "Harry Wilson",
            "minuto": "29'"
          }
        ]
      },
      "adversario": {
        "nombre": "ISL",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/isl.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 2,
        "disparoAGol": "4",
        "tirosRealizados": "20",
        "faltas": "16",
        "tarjetasAmarillas": "2",
        "tarjetasRojas": "0",
        "tirosEsquina": "4",
        "salvadas": "4",
        "anotaciones": [
          {
            "nombre": "Logi Tomasson",
            "minuto": "69'"
          },
          {
            "nombre": "Danny Ward",
            "minuto": "72' EC"
          }
        ]
      }
    },
    {
      "miEquipo": {
        "nombre": "GAL",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/wal.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 2,
        "disparoAGol": "3",
        "tirosRealizados": "10",
        "faltas": "10",
        "tarjetasAmarillas": "4",
        "tarjetasRojas": "0",
        "tirosEsquina": "5",
        "salvadas": "4",
        "anotaciones": [
          {
            "nombre": "Kieffer Moore",
            "minuto": "1'"
          },
          {
            "nombre": "Harry Wilson",
            "minuto": "3'"
          }
        ]
      },
      "adversario": {
        "nombre": "MNE",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/mtg.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 1,
        "disparoAGol": "5",
        "tirosRealizados": "22",
        "faltas": "17",
        "tarjetasAmarillas": "2",
        "tarjetasRojas": "0",
        "tirosEsquina": "12",
        "salvadas": "1",
        "anotaciones": [
          {
            "nombre": "Driton Camaj",
            "minuto": "73'"
          }
        ]
      }
    },
    {
      "miEquipo": {
        "nombre": "GAL",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/wal.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "1",
        "tirosRealizados": "15",
        "faltas": "12",
        "tarjetasAmarillas": "2",
        "tarjetasRojas": "0",
        "tirosEsquina": "4",
        "salvadas": "1",
        "anotaciones": []
      },
      "adversario": {
        "nombre": "TUR",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/tur.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "1",
        "tirosRealizados": "5",
        "faltas": "20",
        "tarjetasAmarillas": "4",
        "tarjetasRojas": "1",
        "tirosEsquina": "3",
        "salvadas": "1",
        "anotaciones": [
          {
            "nombre": "Baris Alper Yilmaz",
            "minuto": "62'"
          }
        ]
      }
    }
  ],
  "estadisticas": {
    "ultimos10": {
      "equipoA": {
        "goles": {
          "promedios": {
            "moda": 0,
            "media": 1.5,
            "mediana": 1
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        },
        "disparoAGol": {
          "promedios": {
            "moda": 4,
            "media": 4.8,
            "mediana": 4
          },
          "minimos": {
            "moda": 3,
            "media": 3,
            "mediana": 3
          }
        },
        "tirosRealizados": {
          "promedios": {
            "moda": 12,
            "media": 15.1,
            "mediana": 14.5
          },
          "minimos": {
            "moda": 8,
            "media": 8,
            "mediana": 8
          }
        },
        "tirosEsquina": {
          "promedios": {
            "moda": 7,
            "media": 7.8,
            "mediana": 7
          },
          "minimos": {
            "moda": 4,
            "media": 4,
            "mediana": 4
          }
        },
        "faltas": {
          "promedios": {
            "moda": 10,
            "media": 10.6,
            "mediana": 10
          },
          "minimos": {
            "moda": 8,
            "media": 8,
            "mediana": 8
          }
        },
        "tarjetasAmarillas": {
          "promedios": {
            "moda": 1,
            "media": 2,
            "mediana": 2
          },
          "minimos": {
            "moda": 1,
            "media": 1,
            "mediana": 1
          }
        },
        "tarjetasRojas": {
          "promedios": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        },
        "salvadas": {
          "promedios": {
            "moda": 2,
            "media": 3,
            "mediana": 2.5
          },
          "minimos": {
            "moda": 1,
            "media": 1,
            "mediana": 1
          }
        }
      },
      "equipoB": {
        "goles": {
          "promedios": {
            "moda": 3,
            "media": 1.9,
            "mediana": 2
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        },
        "disparoAGol": {
          "promedios": {
            "moda": 1,
            "media": 5.8,
            "mediana": 6
          },
          "minimos": {
            "moda": 1,
            "media": 1,
            "mediana": 1
          }
        },
        "tirosRealizados": {
          "promedios": {
            "moda": 12,
            "media": 12.7,
            "mediana": 12
          },
          "minimos": {
            "moda": 4,
            "media": 4,
            "mediana": 4
          }
        },
        "tirosEsquina": {
          "promedios": {
            "moda": 5,
            "media": 5.4,
            "mediana": 5
          },
          "minimos": {
            "moda": 1,
            "media": 1,
            "mediana": 1
          }
        },
        "faltas": {
          "promedios": {
            "moda": 10,
            "media": 11,
            "mediana": 10
          },
          "minimos": {
            "moda": 5,
            "media": 5,
            "mediana": 5
          }
        },
        "tarjetasAmarillas": {
          "promedios": {
            "moda": 2,
            "media": 2.2,
            "mediana": 2
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        },
        "tarjetasRojas": {
          "promedios": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        },
        "salvadas": {
          "promedios": {
            "moda": 0,
            "media": 1.5,
            "mediana": 1
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        }
      }
    },
    "ultimos5": {
      "equipoA": {
        "goles": {
          "promedios": {
            "moda": 1,
            "media": 1.8,
            "mediana": 1
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        },
        "disparoAGol": {
          "promedios": {
            "moda": 4,
            "media": 4.4,
            "mediana": 4
          },
          "minimos": {
            "moda": 4,
            "media": 4,
            "mediana": 4
          }
        },
        "tirosRealizados": {
          "promedios": {
            "moda": 8,
            "media": 14.8,
            "mediana": 17
          },
          "minimos": {
            "moda": 8,
            "media": 8,
            "mediana": 8
          }
        },
        "tirosEsquina": {
          "promedios": {
            "moda": 10,
            "media": 7.2,
            "mediana": 7
          },
          "minimos": {
            "moda": 4,
            "media": 4,
            "mediana": 4
          }
        },
        "faltas": {
          "promedios": {
            "moda": 10,
            "media": 10.8,
            "mediana": 10
          },
          "minimos": {
            "moda": 10,
            "media": 10,
            "mediana": 10
          }
        },
        "tarjetasAmarillas": {
          "promedios": {
            "moda": 1,
            "media": 2,
            "mediana": 2
          },
          "minimos": {
            "moda": 1,
            "media": 1,
            "mediana": 1
          }
        },
        "tarjetasRojas": {
          "promedios": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        },
        "salvadas": {
          "promedios": {
            "moda": 1,
            "media": 2.8,
            "mediana": 3
          },
          "minimos": {
            "moda": 1,
            "media": 1,
            "mediana": 1
          }
        }
      },
      "equipoB": {
        "goles": {
          "promedios": {
            "moda": 3,
            "media": 2.8,
            "mediana": 3
          },
          "minimos": {
            "moda": 1,
            "media": 1,
            "mediana": 1
          }
        },
        "disparoAGol": {
          "promedios": {
            "moda": 6,
            "media": 8.4,
            "mediana": 8
          },
          "minimos": {
            "moda": 6,
            "media": 6,
            "mediana": 6
          }
        },
        "tirosRealizados": {
          "promedios": {
            "moda": 12,
            "media": 15.4,
            "mediana": 12
          },
          "minimos": {
            "moda": 11,
            "media": 11,
            "mediana": 11
          }
        },
        "tirosEsquina": {
          "promedios": {
            "moda": 5,
            "media": 6.6,
            "mediana": 5
          },
          "minimos": {
            "moda": 4,
            "media": 4,
            "mediana": 4
          }
        },
        "faltas": {
          "promedios": {
            "moda": 9,
            "media": 9.8,
            "mediana": 9
          },
          "minimos": {
            "moda": 5,
            "media": 5,
            "mediana": 5
          }
        },
        "tarjetasAmarillas": {
          "promedios": {
            "moda": 3,
            "media": 1.8,
            "mediana": 2
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        },
        "tarjetasRojas": {
          "promedios": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        },
        "salvadas": {
          "promedios": {
            "moda": 0,
            "media": 1,
            "mediana": 1
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        }
      }
    }
  }
}
    },
    ////////////////////////////////////////////
    
/////////////////////////////////////////////////////// 
    {
        linkMatch: 'https://www.espn.com.co/futbol/numeritos/_/juegoId/684657',
        infoMatch: {
  "equipoA": [
    {
      "miEquipo": {
        "nombre": "URU",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/uru.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "1",
        "tirosRealizados": "5",
        "faltas": "10",
        "tarjetasAmarillas": "0",
        "tarjetasRojas": "0",
        "tirosEsquina": "7",
        "salvadas": "3",
        "anotaciones": []
      },
      "adversario": {
        "nombre": "PAR",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/par.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 2,
        "disparoAGol": "5",
        "tirosRealizados": "12",
        "faltas": "18",
        "tarjetasAmarillas": "2",
        "tarjetasRojas": "0",
        "tirosEsquina": "5",
        "salvadas": "1",
        "anotaciones": [
          {
            "nombre": "Matías Galarza",
            "minuto": "13'"
          },
          {
            "nombre": "Julio Enciso",
            "minuto": "81' Pen"
          }
        ]
      }
    },
    {
      "miEquipo": {
        "nombre": "URU",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/uru.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "0",
        "tirosRealizados": "11",
        "faltas": "5",
        "tarjetasAmarillas": "2",
        "tarjetasRojas": "0",
        "tirosEsquina": "3",
        "salvadas": "7",
        "anotaciones": []
      },
      "adversario": {
        "nombre": "BOL",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/bol.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "7",
        "tirosRealizados": "32",
        "faltas": "10",
        "tarjetasAmarillas": "1",
        "tarjetasRojas": "0",
        "tirosEsquina": "16",
        "salvadas": "0",
        "anotaciones": []
      }
    },
    {
      "miEquipo": {
        "nombre": "URU",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/uru.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "2",
        "tirosRealizados": "6",
        "faltas": "11",
        "tarjetasAmarillas": "2",
        "tarjetasRojas": "0",
        "tirosEsquina": "4",
        "salvadas": "3",
        "anotaciones": []
      },
      "adversario": {
        "nombre": "ARG",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/arg.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 1,
        "disparoAGol": "4",
        "tirosRealizados": "12",
        "faltas": "11",
        "tarjetasAmarillas": "1",
        "tarjetasRojas": "1",
        "tirosEsquina": "3",
        "salvadas": "2",
        "anotaciones": [
          {
            "nombre": "Thiago Almada",
            "minuto": "68'"
          },
          {
            "nombre": "Nicolás González",
            "minuto": "90'+5'"
          }
        ]
      }
    },
    {
      "miEquipo": {
        "nombre": "URU",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/uru.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 1,
        "disparoAGol": "2",
        "tirosRealizados": "8",
        "faltas": "11",
        "tarjetasAmarillas": "2",
        "tarjetasRojas": "0",
        "tirosEsquina": "2",
        "salvadas": "2",
        "anotaciones": [
          {
            "nombre": "Federico Valverde",
            "minuto": "55'"
          }
        ]
      },
      "adversario": {
        "nombre": "BRA",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/bra.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 1,
        "disparoAGol": "3",
        "tirosRealizados": "18",
        "faltas": "15",
        "tarjetasAmarillas": "3",
        "tarjetasRojas": "0",
        "tirosEsquina": "4",
        "salvadas": "1",
        "anotaciones": [
          {
            "nombre": "Gerson",
            "minuto": "62'"
          }
        ]
      }
    },
    {
      "miEquipo": {
        "nombre": "URU",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/uru.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 3,
        "disparoAGol": "5",
        "tirosRealizados": "10",
        "faltas": "18",
        "tarjetasAmarillas": "4",
        "tarjetasRojas": "0",
        "tirosEsquina": "6",
        "salvadas": "2",
        "anotaciones": [
          {
            "nombre": "Davinson Sánchez",
            "minuto": "57' EC"
          },
          {
            "nombre": "Rodrigo Aguirre",
            "minuto": "60'"
          },
          {
            "nombre": "Manuel Ugarte",
            "minuto": "90'+11'"
          }
        ]
      },
      "adversario": {
        "nombre": "COL",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/col.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 2,
        "disparoAGol": "4",
        "tirosRealizados": "10",
        "faltas": "14",
        "tarjetasAmarillas": "2",
        "tarjetasRojas": "0",
        "tirosEsquina": "1",
        "salvadas": "3",
        "anotaciones": [
          {
            "nombre": "Juan Fernando Quintero",
            "minuto": "31'"
          },
          {
            "nombre": "Andres Gomez",
            "minuto": "90'+6'"
          }
        ]
      }
    }
  ],
  "equipoB": [
    {
      "miEquipo": {
        "nombre": "VEN",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/ven.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 2,
        "disparoAGol": "5",
        "tirosRealizados": "10",
        "faltas": "12",
        "tarjetasAmarillas": "1",
        "tarjetasRojas": "0",
        "tirosEsquina": "5",
        "salvadas": "2",
        "anotaciones": [
          {
            "nombre": "Héctor Cuéllar",
            "minuto": "5' EC"
          },
          {
            "nombre": "Salomón Rondón",
            "minuto": "30'"
          }
        ]
      },
      "adversario": {
        "nombre": "BOL",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/bol.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "2",
        "tirosRealizados": "9",
        "faltas": "18",
        "tarjetasAmarillas": "2",
        "tarjetasRojas": "0",
        "tirosEsquina": "2",
        "salvadas": "4",
        "anotaciones": []
      }
    },
    {
      "miEquipo": {
        "nombre": "VEN",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/ven.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 1,
        "disparoAGol": "5",
        "tirosRealizados": "12",
        "faltas": "15",
        "tarjetasAmarillas": "3",
        "tarjetasRojas": "0",
        "tirosEsquina": "4",
        "salvadas": "1",
        "anotaciones": [
          {
            "nombre": "Salomón Rondón",
            "minuto": "41' Pen"
          }
        ]
      },
      "adversario": {
        "nombre": "Perú",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/per.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 0,
        "disparoAGol": "1",
        "tirosRealizados": "11",
        "faltas": "14",
        "tarjetasAmarillas": "2",
        "tarjetasRojas": "0",
        "tirosEsquina": "1",
        "salvadas": "4",
        "anotaciones": []
      }
    },
    {
      "miEquipo": {
        "nombre": "VEN",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/ven.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 1,
        "disparoAGol": "6",
        "tirosRealizados": "10",
        "faltas": "13",
        "tarjetasAmarillas": "2",
        "tarjetasRojas": "0",
        "tirosEsquina": "2",
        "salvadas": "4",
        "anotaciones": [
          {
            "nombre": "Jhonder Cádiz",
            "minuto": "90'+1'"
          }
        ]
      },
      "adversario": {
        "nombre": "ECU",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/ecu.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 2,
        "disparoAGol": "6",
        "tirosRealizados": "16",
        "faltas": "13",
        "tarjetasAmarillas": "1",
        "tarjetasRojas": "0",
        "tirosEsquina": "6",
        "salvadas": "5",
        "anotaciones": [
          {
            "nombre": "Enner Valencia",
            "minuto": "39'"
          },
          {
            "nombre": "Enner Valencia",
            "minuto": "46'"
          }
        ]
      }
    },
    {
      "miEquipo": {
        "nombre": "VEN",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/ven.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 1,
        "disparoAGol": "3",
        "tirosRealizados": "11",
        "faltas": "8",
        "tarjetasAmarillas": "0",
        "tarjetasRojas": "0",
        "tirosEsquina": "4",
        "salvadas": "6",
        "anotaciones": [
          {
            "nombre": "Jorge Yriarte",
            "minuto": "68'"
          }
        ]
      },
      "adversario": {
        "nombre": "USA",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/usa.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 3,
        "disparoAGol": "10",
        "tirosRealizados": "15",
        "faltas": "14",
        "tarjetasAmarillas": "2",
        "tarjetasRojas": "0",
        "tirosEsquina": "8",
        "salvadas": "2",
        "anotaciones": [
          {
            "nombre": "Jack McGlynn",
            "minuto": "37'"
          },
          {
            "nombre": "Patrick Agyemang",
            "minuto": "39'"
          },
          {
            "nombre": "Matko Miljevic",
            "minuto": "64'"
          }
        ]
      }
    },
    {
      "miEquipo": {
        "nombre": "VEN",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/ven.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 2,
        "disparoAGol": "3",
        "tirosRealizados": "8",
        "faltas": "13",
        "tarjetasAmarillas": "3",
        "tarjetasRojas": "0",
        "tirosEsquina": "4",
        "salvadas": "2",
        "anotaciones": [
          {
            "nombre": "Jefferson Savarino",
            "minuto": "13'"
          },
          {
            "nombre": "Rubén Ramírez",
            "minuto": "22'"
          }
        ]
      },
      "adversario": {
        "nombre": "CHI",
        "escudo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/chi.png&scale=crop&cquality=40&location=origin&w=96&h=96",
        "goles": 4,
        "disparoAGol": "5",
        "tirosRealizados": "8",
        "faltas": "9",
        "tarjetasAmarillas": "1",
        "tarjetasRojas": "0",
        "tirosEsquina": "1",
        "salvadas": "1",
        "anotaciones": [
          {
            "nombre": "Eduardo Vargas",
            "minuto": "20'"
          },
          {
            "nombre": "Tomás Rincón",
            "minuto": "29' EC"
          },
          {
            "nombre": "Lucas Cepeda",
            "minuto": "38'"
          },
          {
            "nombre": "Lucas Cepeda",
            "minuto": "47'"
          }
        ]
      }
    }
  ],
  "estadisticas": {
    "ultimos10": {
      "equipoA": {
        "goles": {
          "promedios": {
            "moda": 0,
            "media": 0.8,
            "mediana": 0
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        },
        "disparoAGol": {
          "promedios": {
            "moda": 2,
            "media": 2,
            "mediana": 2
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        },
        "tirosRealizados": {
          "promedios": {
            "moda": 5,
            "media": 8,
            "mediana": 8
          },
          "minimos": {
            "moda": 5,
            "media": 5,
            "mediana": 5
          }
        },
        "tirosEsquina": {
          "promedios": {
            "moda": 2,
            "media": 4.4,
            "mediana": 4
          },
          "minimos": {
            "moda": 2,
            "media": 2,
            "mediana": 2
          }
        },
        "faltas": {
          "promedios": {
            "moda": 11,
            "media": 11,
            "mediana": 11
          },
          "minimos": {
            "moda": 5,
            "media": 5,
            "mediana": 5
          }
        },
        "tarjetasAmarillas": {
          "promedios": {
            "moda": 2,
            "media": 2,
            "mediana": 2
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        },
        "tarjetasRojas": {
          "promedios": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        },
        "salvadas": {
          "promedios": {
            "moda": 2,
            "media": 3.4,
            "mediana": 3
          },
          "minimos": {
            "moda": 2,
            "media": 2,
            "mediana": 2
          }
        }
      },
      "equipoB": {
        "goles": {
          "promedios": {
            "moda": 1,
            "media": 1.4,
            "mediana": 1
          },
          "minimos": {
            "moda": 1,
            "media": 1,
            "mediana": 1
          }
        },
        "disparoAGol": {
          "promedios": {
            "moda": 3,
            "media": 4.4,
            "mediana": 5
          },
          "minimos": {
            "moda": 3,
            "media": 3,
            "mediana": 3
          }
        },
        "tirosRealizados": {
          "promedios": {
            "moda": 10,
            "media": 10.2,
            "mediana": 10
          },
          "minimos": {
            "moda": 8,
            "media": 8,
            "mediana": 8
          }
        },
        "tirosEsquina": {
          "promedios": {
            "moda": 4,
            "media": 3.8,
            "mediana": 4
          },
          "minimos": {
            "moda": 2,
            "media": 2,
            "mediana": 2
          }
        },
        "faltas": {
          "promedios": {
            "moda": 13,
            "media": 12.2,
            "mediana": 13
          },
          "minimos": {
            "moda": 8,
            "media": 8,
            "mediana": 8
          }
        },
        "tarjetasAmarillas": {
          "promedios": {
            "moda": 3,
            "media": 1.8,
            "mediana": 2
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        },
        "tarjetasRojas": {
          "promedios": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        },
        "salvadas": {
          "promedios": {
            "moda": 2,
            "media": 3,
            "mediana": 2
          },
          "minimos": {
            "moda": 1,
            "media": 1,
            "mediana": 1
          }
        }
      }
    },
    "ultimos5": {
      "equipoA": {
        "goles": {
          "promedios": {
            "moda": 0,
            "media": 0.8,
            "mediana": 0
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        },
        "disparoAGol": {
          "promedios": {
            "moda": 2,
            "media": 2,
            "mediana": 2
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        },
        "tirosRealizados": {
          "promedios": {
            "moda": 5,
            "media": 8,
            "mediana": 8
          },
          "minimos": {
            "moda": 5,
            "media": 5,
            "mediana": 5
          }
        },
        "tirosEsquina": {
          "promedios": {
            "moda": 2,
            "media": 4.4,
            "mediana": 4
          },
          "minimos": {
            "moda": 2,
            "media": 2,
            "mediana": 2
          }
        },
        "faltas": {
          "promedios": {
            "moda": 11,
            "media": 11,
            "mediana": 11
          },
          "minimos": {
            "moda": 5,
            "media": 5,
            "mediana": 5
          }
        },
        "tarjetasAmarillas": {
          "promedios": {
            "moda": 2,
            "media": 2,
            "mediana": 2
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        },
        "tarjetasRojas": {
          "promedios": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        },
        "salvadas": {
          "promedios": {
            "moda": 2,
            "media": 3.4,
            "mediana": 3
          },
          "minimos": {
            "moda": 2,
            "media": 2,
            "mediana": 2
          }
        }
      },
      "equipoB": {
        "goles": {
          "promedios": {
            "moda": 1,
            "media": 1.4,
            "mediana": 1
          },
          "minimos": {
            "moda": 1,
            "media": 1,
            "mediana": 1
          }
        },
        "disparoAGol": {
          "promedios": {
            "moda": 3,
            "media": 4.4,
            "mediana": 5
          },
          "minimos": {
            "moda": 3,
            "media": 3,
            "mediana": 3
          }
        },
        "tirosRealizados": {
          "promedios": {
            "moda": 10,
            "media": 10.2,
            "mediana": 10
          },
          "minimos": {
            "moda": 8,
            "media": 8,
            "mediana": 8
          }
        },
        "tirosEsquina": {
          "promedios": {
            "moda": 4,
            "media": 3.8,
            "mediana": 4
          },
          "minimos": {
            "moda": 2,
            "media": 2,
            "mediana": 2
          }
        },
        "faltas": {
          "promedios": {
            "moda": 13,
            "media": 12.2,
            "mediana": 13
          },
          "minimos": {
            "moda": 8,
            "media": 8,
            "mediana": 8
          }
        },
        "tarjetasAmarillas": {
          "promedios": {
            "moda": 3,
            "media": 1.8,
            "mediana": 2
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        },
        "tarjetasRojas": {
          "promedios": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          },
          "minimos": {
            "moda": 0,
            "media": 0,
            "mediana": 0
          }
        },
        "salvadas": {
          "promedios": {
            "moda": 2,
            "media": 3,
            "mediana": 2
          },
          "minimos": {
            "moda": 1,
            "media": 1,
            "mediana": 1
          }
        }
      }
    }
  }
}
    }
]
export default mockData;