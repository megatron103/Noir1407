#include<bits/stdc++.h>
using namespace std;
string vcl(const string &s)
{
    string  t = "#";
    for(char x: s)
    {
        t+=x;
        t+="#";
    }
    int n= t.size();
    vector<int>p(n,0);
    int dinh = 0;
    int bankinh = 0;
    int dai = 0;
    int trungtam = 0;
    for(int i= 1 ; i< n; i++)
    {
        if( i< bankinh)
            p[i] = min(bankinh- i,p[2 * dinh-i]);
        while(i+p[i] < n && i- p[i]>= 0 && t[i+p[i]] == t[i-p[i]])
            p[i]++;
        if( i+p[i] > bankinh){
            dinh = i ;
            bankinh = i+p[i];
        }
        if( p[i]> dai){
            dai = p[i];
            trungtam = i+p[i];
        }
    }
    int start = (trungtam - dai)/2;
    return s.substr(start,dai);
}
int main()
{
    string s;
    cin>>s;
    string result = vcl (s);
    cout<<result<<endl;
    return 0;
}
