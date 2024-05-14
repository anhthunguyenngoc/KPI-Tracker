let google_link = "https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&emr=1&ltmpl=default&ltmplcache=2&osid=1&passive=true&rm=false&scc=1&service=mail&ss=1&ifkv=AaSxoQy7392ACvOWtJi9JFjYETgb3y6UGgRR9otEq66GnO79sg2cD1axoMJo2HLncpMiLFzKDWBFsQ&ddm=0&flowName=GlifWebSignIn&flowEntry=ServiceLogin";
let face_link = "https://www.facebook.com/?stype=lo&deoia=1&jlou=AfeEE0EiUvMtyudn--UgTiqHlfbv1Q2_DkeJg-zSOA4Coahjbq9yyl-E3n8KiEBcn5Q9k83_xExaZcHy9MVAT1jC7micuB90b-cb81WVM1Vbxg&smuh=55385&lh=Ac9zHWz-HvdvnlIQILM";
let team_link = "https://login.microsoftonline.com/common/oauth2/v2.0/authorize?response_type=id_token&scope=openid%20profile&client_id=5e3ce6c0-2b1f-4285-8d4b-75ee78787346&redirect_uri=https%3A%2F%2Fteams.microsoft.com%2Fgo&state=eyJpZCI6ImIwNTk0NTlkLTg2MTAtNGYwNC04ZjRhLWRjMmI2ODQzNDVlNCIsInRzIjoxNzE1Njg4MTgwLCJtZXRob2QiOiJyZWRpcmVjdEludGVyYWN0aW9uIn0%3D&nonce=46486280-b1e0-455e-99d6-b23b8e947562&client_info=1&x-client-SKU=MSAL.JS&x-client-Ver=1.3.4&client-request-id=30503fd8-3039-4284-8637-cd8b70c97498&response_mode=fragment";

document.getElementById("team").addEventListener("click", function() {
    window.open(team_link, '_blank', "width=600,height=400");
});

document.getElementById("gg").addEventListener("click", function() {
    window.open(google_link, '_blank', "width=600,height=400");
});

document.getElementById("fb").addEventListener("click", function() {
    window.open(face_link, '_blank', "width=600,height=400");
});

