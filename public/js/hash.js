function _hashData(r){function o(r,o){return r>>>o|r<<32-o}for(var f,t,n=Math.pow,a=n(2,32),c="length",e="",i=[],h=8*r[c],u=[],v=[],l=0,s={},g=2;l<64;g++)if(!s[g]){for(f=0;f<313;f+=g)s[f]=g;u[l]=n(g,.5)*a|0,v[l++]=n(g,1/3)*a|0}for(r+="";r[c]%64-56;)r+="\0";for(f=0;f<r[c];f++){if((t=r.charCodeAt(f))>>8)return;i[f>>2]|=t<<(3-f)%4*8}for(i[i[c]]=h/a|0,i[i[c]]=h,t=0;t<i[c];){var d=i.slice(t,t+=16),p=u;for(u=u.slice(0,8),f=0;f<64;f++){var w=d[f-15],A=d[f-2],C=u[0],M=u[4],S=u[7]+(o(M,6)^o(M,11)^o(M,25))+(M&u[5]^~M&u[6])+v[f]+(d[f]=f<16?d[f]:d[f-16]+(o(w,7)^o(w,18)^w>>>3)+d[f-7]+(o(A,17)^o(A,19)^A>>>10)|0);(u=[S+((o(C,2)^o(C,13)^o(C,22))+(C&u[1]^C&u[2]^u[1]&u[2]))|0].concat(u))[4]=u[4]+S|0}for(f=0;f<8;f++)u[f]=u[f]+p[f]|0}for(f=0;f<8;f++)for(t=3;t+1;t--){var _=u[f]>>8*t&255;e+=(_<16?0:"")+_.toString(16)}return e}
