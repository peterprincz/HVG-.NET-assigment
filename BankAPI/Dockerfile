FROM microsoft/aspnetcore:2.0-nanoserver-sac2016 AS base
WORKDIR /app
EXPOSE 80

FROM microsoft/aspnetcore-build:2.0-nanoserver-sac2016 AS build
WORKDIR /src
COPY BankAPI/BankAPI.csproj BankAPI/
RUN dotnet restore BankAPI/BankAPI.csproj
COPY . .
WORKDIR /src/BankAPI
RUN dotnet build BankAPI.csproj -c Release -o /app

FROM build AS publish
RUN dotnet publish BankAPI.csproj -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "BankAPI.dll"]
