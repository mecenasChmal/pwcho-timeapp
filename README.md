# Docker
### Do zbudowania obrazu z pobranego kodu źródłowego należy z poziomu katalogu użyć komendy:
``` docker build -t html-server-image . ```
### Aby uruchomić: 
``` docker run -d -p 8080:80 --name html-server html-server-image ```

### do zbudowania obrazu bez pobierania należy wykorzystać komendę:
``` docker build -t mecenasChmal/pwcho-timeapp:v1 github.com/mecenasChmal/pwcho-timeapp ```
### uruchomienie:
``` docker run -d -p 8080:80 --name html-server mecenasChmal/pwcho-timeapp:v1 ```

### dockerhub:
#### aby pobrać obraz z dockerhub wystarczy wpisać w konsoli:
``` docker pull mecenaschmal/pwcho-timeapp:latest ```
#### uruchomienie kontenera odbywa się analogicznie jak w poprzednich przypadkach
