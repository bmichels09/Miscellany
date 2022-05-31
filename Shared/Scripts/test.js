function drawTable(data) {
    var qsParams = new URLSearchParams(window.location.search);
    var resultElement = d3.select("#result");
    data.forEach(x => {
        resultElement.append("span")
            .html(`${x.ticker}~${x.companyName}<br>`);
    });
}

(async () => {
    var data = [
        // Stocks in Nasdaq
        "AABA,AACI,AACOU,AADI,AAL,AAME,AAOI,AAON,AAPL,AATC,AAWW,ABCB,ABCL,ABDC,ABEO,ABGI,ABIL,ABIO,ABMD,ABNB,ABOS,ABSI,ABST,ABTX,ABUS,ABVC,ACAB,ACABU,ACAD,ACAH,ACAI,ACAX,ACAXU,ACBA,ACBAU,ACBI,ACCD,ACER,ACET,ACEV,ACGL,ACHC,ACHN,ACHV,ACIA,ACIU,ACIW,ACKIT,ACLS,ACLX,ACMR,ACNB,ACON,ACOR,ACQR,ACRS,ACRX,ACST,ACT,ACTC,ACTD,ACTG,ACTT,ACVA,ACXM,ACXP,ADAL,ADALU,ADBE,ADER,ADES,ADGI,ADI,ADIL,ADMA,ADMP,ADMS,ADN,ADOC,ADOM,ADP,ADSE,ADSK,ADTH,ADTN,ADTX,ADUS,ADV,ADVM,ADXS,AEAC,AEAE,AEAEU,AEGN,AEHA,AEHL,AEHR,AEI,AEIS,AEMD",
        "AERC,AERI,AESE,AEY,AEYE,AEZS,AFAC,AFACU,AFAQ,AFARU,AFBI,AFCG,AFH,AFHBL,AFIB,AFMD,AFRM,AFYA,AGBA,AGC,AGEN,AGFS,AGFY,AGGR,AGIL,AGIO,AGLE,AGMH,AGNC,AGRI,AGRX,AGTC,AGYS,AHAC,AHCO,AHPA,AHPAU,AHPI,AHRN,AHRNU,AIB,AIBBU,AIHS,AIKI,AIMAU,AIMC,AIMT,AINV,AIP,AIPT,AIRG,AIRS,AIRT,AIRTP,AKAM,AKAN,AKBA,AKCA,AKIC,AKRO,AKRX,AKTS,AKU,AKUS,AKYA,ALAC,ALBO,ALCO,ALDR,ALDX,ALEC,ALF,ALGM,ALGN,ALGR,ALGS,ALGT,ALHC,ALIM,ALJJ,ALKS,ALKT,ALLK,ALLO,ALLR,ALLT,ALNA,ALNY,ALOR,ALORU,ALOT,ALPA,ALPN,ALPP,ALQA,ALRM,ALRN,ALRS,ALSA,ALSAU",
        "ALSK,ALT,ALTA,ALTO,ALTR,ALTU,ALVR,ALXN,ALXO,ALYA,ALZN,AMAG,AMAL,AMAO,AMAT,AMAX,AMBA,AMCI,AMCIU,AMCX,AMD,AMED,AMEH,AMGN,AMHC,AMKR,AMLX,AMNB,AMOT,AMPG,AMPH,AMPL,AMRB,AMRH,AMRK,AMRS,AMSC,AMSF,AMST,AMSWA,AMTB,AMTBB,AMTD,AMTI,AMTX,AMWD,AMZN,ANAB,ANAT,ANCX,ANDE,ANEB,ANGH,ANGI,ANGN,ANGO,ANIK,ANIP,ANIX,ANNX,ANSS,ANTX,ANZU,AOGO,AOGOU,AONE,AOSL,AOUT,APAC,APCX,APDN,APEI,APEN,APEX,APIC,APLD,APLS,APLT,APM,APMI,APOG,APP,APPF,APPH,APPN,APPS,APR,APRE,APTM,APTO,APTX,APVO,APWC,APXI,APXIU,APXTU,APYX,AQB,AQMS,AQST",
        "ARAV,ARAY,ARBE,ARBG,ARBKL,ARCB,ARCC,ARCE,ARCI,ARCK,ARCKU,ARCT,ARCW,ARDS,ARDX,AREB,AREC,AREX,ARGU,ARHS,ARIZ,ARIZU,ARKO,ARKR,ARNA,AROW,ARPO,ARQL,ARQQ,ARQT,ARRS,ARRW,ARRY,ARTA,ARTAU,ARTE,ARTL,ARTNA,ARTW,ARTX,ARVL,ARVN,ARWR,ARYA,ARYAW,ARYB,ARYD,ARYE,ASAX,ASCA,ASCAU,ASCL,ASCMA,ASFI,ASLE,ASMB,ASNA,ASNS,ASO,ASPA,ASPAU,ASPC,ASPS,ASPU,ASRT,ASRV,ASTC,ASTE,ASTIW,ASTL,ASTR,ASTS,ASUR,ASV,ASYS,ATAI,ATAK,ATAKU,ATCOL,ATCX,ATEC,ATER,ATEX,ATHA,ATHX,ATIF,ATIS,ATLC,ATLCL,ATLO,ATNF,ATNI,ATNX,ATOM,ATOS,ATRA,ATRC,ATRI,ATRO,ATRS",
        "ATSG,ATSPT,ATTU,ATVC,ATVI,ATXI,ATXS,ATY,AUB,AUBN,AUDC,AUGX,AUID,AUPH,AUR,AURA,AURC,AUTH,AUTO,AUUD,AUVI,AVAC,AVAH,AVAV,AVCO,AVCT,AVDR,AVDX,AVEO,AVGO,AVGR,AVHI,AVID,AVIR,AVNW,AVO,AVPT,AVRO,AVT,AVTE,AVTX,AVXL,AWH,AWRE,AWSM,AXAS,AXDX,AXGN,AXLA,AXNX,AXON,AXSM,AXTI,AY,AYLA,AYRO,AYTU,AZ,AZPN,AZTA,AZYO,BAFN,BANF,BANR,BANX,BAOS,BASE,BASI,BATRA,BATRK,BBBY,BBCP,BBGI,BBI,BBIG,BBIO,BBLG,BBOX,BBQ,BBRY,BBSI,BCAB,BCAC,BCBP,BCDA,BCDS,BCEL,BCLI,BCML,BCOM,BCOR,BCOV,BCOW,BCPC,BCRX,BCSA,BCSAU,BCTF,BCTX,BCYP",
        "BDGE,BDSI,BDSX,BDTX,BEAM,BEAT,BECN,BEEM,BEER,BELFA,BELFB,BENE,BFC,BFI,BFIN,BFRI,BFST,BFYT,BGCP,BGFV,BGRY,BHAC,BHAT,BHBK,BHF,BHSE,BHSEU,BHTG,BIGC,BIIB,BIMI,BIOC,BIOL,BIOS,BIOSU,BIOT,BIOX,BIQI,BIRD,BITF,BIVI,BJDX,BJRI,BKCC,BKNG,BKSC,BKYI,BL,BLBD,BLBX,BLCM,BLDE,BLDP,BLFS,BLFY,BLI,BLIN,BLKB,BLMN,BLMT,BLNG,BLNK,BLPH,BLSA,BLTS,BLU,BLUW,BLZE,BMAQ,BMAQU,BMBL,BMCH,BMEA,BMRA,BMRC,BMRN,BMTC,BNCL,BNFT,BNGO,BNIX,BNNR,BNSO,BNTC,BOCH,BOCN,BOCNU,BOJA,BOKF,BOKFL,BOLD,BOLT,BON,BOOM,BOSC,BOTJ,BOWX,BOXL,BPAC,BPACU",
        "BPFH,BPMC,BPOP,BPRN,BPTH,BPYU,BRAC,BRACU,BRAG,BRCN,BREW,BREZ,BRFH,BRID,BRIV,BRKH,BRKHU,BRKL,BRKR,BRLI,BRLT,BROG,BRP,BRQS,BRTX,BRY,BRZE,BSBK,BSET,BSFC,BSGA,BSGM,BSKY,BSPE,BSQR,BSRR,BSTC,BSVN,BSY,BTAI,BTAQ,BTB,BTBD,BTBT,BTCS,BTCY,BTEK,BTNB,BTOG,BTRS,BTTX,BTWN,BTX,BUFF,BUSE,BVS,BVSN,BWAC,BWAQ,BWAQU,BWB,BWC,BWCAU,BWEN,BWFG,BWMN,BWMX,BWV,BXRX,BYFC,BYND,BYRN,BYSI,BYTS,BZFD,CAAS,CABA,CAC,CACC,CADC,CADL,CAHC,CAKE,CALA,CALB,CALI,CALM,CAMP,CAMT,CAPR,CAPS,CAR,CARA,CARB,CARE,CARG,CARO,CART,CARV,CASA",
        "CASH,CASI,CASM,CASS,CASY,CATC,CATM,CATS,CATY,CBAN,CBAT,CBAY,CBFV,CBIO,CBLK,CBMB,CBMG,CBNK,CBOE,CBPO,CBRG,CBRGU,CBRL,CBSH,CBTX,CCAI,CCAP,CCB,CCBG,CCCC,CCEL,CCGM,CCMP,CCNC,CCNE,CCNI,CCOI,CCRC,CCRN,CCSI,CCTS,CCTSU,CCXI,CDAK,CDAQ,CDEV,CDK,CDLX,CDMO,CDNA,CDNS,CDRO,CDTX,CDW,CDX,CDXC,CDXS,CDZI,CEAD,CECE,CEG,CELC,CELG,CELH,CELU,CELZ,CEMI,CENH,CENN,CENQ,CENT,CENTA,CENX,CERE,CERN,CERS,CERT,CETV,CETX,CEVA,CFB,CFBI,CFBK,CFFA,CFFAW,CFFE,CFFI,CFFN,CFFS,CFFSU,CFIV,CFLT,CFMS,CFRX,CFSB,CFVI,CGABL,CGBD,CGEM,CGEN",
        "CGIX,CGNT,CGNX,CGO,CGRN,CGRO,CGTX,CHCI,CHCO,CHDN,CHEAU,CHEF,CHEK,CHEKZ,CHIR,CHKP,CHMA,CHMG,CHNG,CHNR,CHPM,CHRS,CHRW,CHTR,CHUX,CHUY,CHW,CHWA,CIBN,CIDM,CIFR,CIFS,CIGI,CIIC,CIIG,CINC,CINF,CING,CISO,CITE,CITEU,CITZ,CIVB,CIZN,CJJD,CKPT,CLAQ,CLAQU,CLAR,CLAY,CLBK,CLBS,CLBT,CLCT,CLDB,CLDC,CLDX,CLEU,CLFD,CLGN,CLIN,CLINU,CLIR,CLIRW,CLLS,CLNE,CLNN,CLOE,CLOV,CLPS,CLPT,CLRB,CLRCU,CLRM,CLRO,CLRS,CLSD,CLSK,CLSN,CLST,CLUB,CLVR,CLVS,CLWT,CLXT,CMAX,CMBM,CMCA,CMCAU,CMCO,CMCSA,CMCT,CME,CMFNL,CMII,CMLF,CMLS,CMLT,CMPI,CMPO",
        "CMPR,CMPX,CMRX,CMTA,CMTL,CNAF,CNAT,CNBKA,CNCE,CNET,CNEY,CNFR,CNFRL,CNGL,CNGLU,CNIC,CNNB,CNOB,CNSL,CNSP,CNST,CNTG,CNTQ,CNTX,CNTY,CNXC,CNXN,COCO,COCP,CODA,CODX,COFS,COGT,COHR,COHU,COIN,COKE,COLB,COLI,COLL,COLM,COMM,COMS,CONE,CONN,CONX,CONXU,COOL,COOP,CORE,CORT,CORV,CORZ,COSM,COST,COVA,COWN,COWNL,COWNZ,CPAA,CPAAU,CPAH,CPAQ,CPAQU,CPAR,CPARU,CPHC,CPIX,CPOP,CPRT,CPRX,CPSH,CPSI,CPSS,CPTAL,CPTI,CPTN,CPZ,CRAI,CRAY,CRBP,CRBU,CRCT,CRDF,CRDL,CRDO,CREC,CRECU,CREE,CREG,CREX,CRGE,CRIS,CRKN,CRMD,CRMT,CRNC,CRNT,CRNX,CRON",
        "CROX,CRSP,CRSR,CRTD,CRTX,CRUS,CRVL,CRVS,CRWD,CRWS,CRXT,CRYP,CRZN,CRZO,CSBR,CSCO,CSCW,CSFL,CSGP,CSGS,CSII,CSIQ,CSLM,CSLMU,CSOD,CSPI,CSQ,CSSE,CSSEN,CSTE,CSTL,CSTR,CSWC,CSWCL,CSWI,CSX,CTAQ,CTAS,CTBI,CTBK,CTG,CTHR,CTIB,CTIC,CTKB,CTLP,CTMX,CTRC,CTRL,CTRM,CTRN,CTRV,CTSH,CTSO,CTWS,CTXR,CTXS,CUBA,CUE,CUEN,CULL,CUR,CURI,CUTR,CVAC,CVAS,CVBF,CVCO,CVCY,CVET,CVGI,CVGW,CVLB,CVLG,CVLT,CVLY,CVRX,CVT,CVV,CWBC,CWBR,CWCO,CWS,CWST,CXDC,CXDO,CY,CYAN,CYBE,CYBR,CYCC,CYCN,CYN,CYRN,CYRX,CYT,CYTH,CYTK,CYTO,CYTR",
        "CYXT,CZFC,CZNC,CZR,CZWI,DAIO,DAKT,DALN,DALS,DAOO,DAOOU,DARE,DATS,DAVE,DAWN,DBCP,DBGI,DBTX,DBX,DCAR,DCBO,DCFC,DCGO,DCOM,DCPH,DCRBU,DCRD,DCRN,DCTH,DDMX,DDMXU,DDOG,DEAC,DEACU,DECAU,DEEP,DEER,DENN,DERM,DEST,DFBH,DFFN,DFH,DFPH,DFRG,DFVL,DFVS,DGHI,DGICA,DGICB,DGII,DGLY,DGNS,DGNU,DH,DHAC,DHACU,DHBC,DHC,DHCA,DHCNL,DHHC,DHIL,DHXM,DIBS,DICE,DIET,DILA,DIOD,DISA,DISCB,DISCK,DISH,DJCO,DKDCA,DKNG,DLBS,DLCA,DLHC,DLO,DLPN,DLTH,DLTR,DMAC,DMAQ,DMAQU,DMPI,DMRC,DMTK,DNAA,DNAB,DNAC,DNAD,DNAY,DNBF,DNKN,DNLI,DNUT,DOCU,DOGZ",
        "DOMO,DOOO,DORM,DOVA,DOX,DPCS,DPCSU,DPRO,DRAX,DRAY,DRCO,DRCT,DRIO,DRMA,DRMT,DRNA,DRRX,DRTS,DRTT,DRUG,DRVN,DRYS,DSAC,DSACU,DSEY,DSGN,DSGX,DSKE,DSP,DSPG,DSWL,DTEA,DTIL,DTOC,DTRT,DTSS,DTST,DTUL,DTUS,DTYL,DTYS,DUET,DUETU,DUNE,DUOL,DUOT,DVAX,DVCR,DWAC,DWSN,DXCM,DXLG,DXPE,DXR,DXYN,DYAI,DYNS,DYNT,DYSL,DZSI,EA,EAC,EAGL,EAGLW,EAR,EASI,EAST,EBAC,EBC,EBET,EBIX,EBMT,EBON,EBSB,EBTC,ECHO,ECOL,ECPG,EDAP,EDCI,EDIT,EDNC,EDRY,EDSA,EDTK,EDTX,EDUC,EEFT,EEI,EEIQ,EENC,EFBI,EFII,EFOI,EFSC,EGBN,EGLE,EGLX,EGOV,EGRX",
        "EHR,EIDX,EIGI,EIGR,EJFA,EJH,EKSO,ELBM,ELDN,ELEV,ELGX,ELMS,ELOX,ELSE,ELTK,ELYM,ELYS,EMBC,EMBK,EMCF,EMCI,EMKR,EML,EMLD,EMLDU,EMMA,EMMS,ENCP,ENCPU,ENDP,ENER,ENERU,ENFC,ENG,ENJY,ENLV,ENOB,ENPH,ENSC,ENSG,ENT,ENTA,ENTF,ENTFU,ENTG,ENTR,ENTX,ENVB,ENVI,ENVIU,ENVX,EOLS,EOSE,EPAY,EPHY,EPIX,EPRE,EPSN,EPZM,EQ,EQBK,EQIX,EQOS,EQRX,ERAS,ERES,ERI,ERIE,ERII,ESAC,ESACU,ESBK,ESCA,ESEA,ESGR,ESGRO,ESIO,ESLT,ESND,ESOA,ESPR,ESQ,ESSA,ESSC,ESTA,ESTR,ESXB,ETAC,ETACU,ETFC,ETNB,ETON,ETSY,ETTX,EUCR,EUSG,EVBG,EVCM,EVER,EVFM",
        "EVGO,EVGR,EVGRU,EVK,EVLO,EVLV,EVLVU,EVOJ,EVOK,EVOL,EVOP,EVSI,EWBC,EWCZ,EWTX,EXAS,EXEL,EXFO,EXFY,EXLS,EXPD,EXPE,EXPO,EXTR,EYE,EYEG,EYEN,EYES,EYPT,EZFL,EZGO,EZPW,FA,FABK,FAMI,FANG,FARM,FARO,FAST,FAT,FATBB,FATBW,FATE,FATP,FB,FBIO,FBIZ,FBMS,FBNC,FBNK,FBRX,FBSI,FBSS,FCACU,FCAP,FCBC,FCBP,FCCO,FCCY,FCEL,FCFS,FCNCA,FCRD,FCSC,FCTR,FCUV,FDBC,FDMT,FDUS,FDUSG,FDUSL,FDUSZ,FEAM,FEIM,FELE,FEMY,FENC,FEXD,FEXDU,FFBC,FFBW,FFDF,FFHL,FFIC,FFIE,FFIN,FFIV,FFNW,FFWM,FGBI,FGEN,FGF,FGI,FGMC,FGMCU,FHB,FHC,FHLT,FHTX,FIAC",
        "FIACU,FIBK,FICV,FINM,FINW,FISI,FISV,FITB,FIVE,FIVN,FIXX,FIZZ,FKWL,FLAC,FLAT,FLDR,FLEX,FLGC,FLGT,FLIC,FLIR,FLL,FLLC,FLMN,FLNC,FLNT,FLUX,FLWS,FLXN,FLXS,FLYW,FMAO,FMBH,FMBI,FMBN,FMIV,FMNB,FMTX,FNCB,FNCH,FNGR,FNHC,FNJN,FNKO,FNLC,FNSR,FNVT,FNVTU,FNWB,FNWD,FOCS,FOGO,FOLD,FOMX,FONR,FORA,FORD,FOREU,FORK,FORM,FORR,FOSL,FOSLL,FOUN,FOX,FOXA,FOXF,FOXW,FPAY,FPRX,FRAF,FRAN,FRBA,FRBK,FRBN,FRBNU,FRED,FREE,FREQ,FRG,FRGI,FRHC,FRLA,FRLAU,FRME,FROG,FRON,FRPH,FRPT,FRSG,FRSH,FRST,FRTA,FRW,FSAC,FSACW,FSBC,FSBW,FSCT,FSEA",
        "FSFG,FSII,FSLR,FSRD,FSRX,FSSI,FSST,FSTR,FSTX,FSV,FTAA,FTAC,FTCI,FTCV,FTD,FTDR,FTEK,FTFT,FTHM,FTII,FTIIU,FTNT,FTOC,FTPA,FTR,FTRP,FTSV,FTVI,FULC,FULT,FUNC,FUND,FUSB,FUSN,FUV,FVAM,FVCB,FVE,FWAA,FWAC,FWBI,FWONA,FWONK,FWRD,FWRG,FXCO,FXCOU,FXNC,FYBR,GABC,GACQ,GAIA,GAIN,GAINN,GAINZ,GALT,GAMB,GAMC,GAME,GAN,GANX,GARS,GASS,GATE,GBDC,GBIO,GBLIL,GBLIZ,GBNH,GBNY,GBOX,GBRG,GBS,GBT,GCAC,GCBC,GCMG,GCOR,GCTK,GDEN,GDEV,GDNR,GDNRU,GDRX,GDST,GDSTU,GDYN,GECC,GECCL,GECCM,GECCN,GECCO,GEEX,GEEXU,GENC,GENQ,GENQU,GEOS,GERN,GEVO",
        "GFAI,GFED,GFGD,GFGDU,GFN,GFNSL,GFNSZ,GFS,GGAA,GGAAU,GGGV,GGMC,GGPI,GGPIU,GGR,GH,GHAC,GHACU,GHDX,GHIV,GHIVU,GHIX,GHIXU,GHRS,GHSI,GIAC,GIFI,GIGM,GIII,GIIX,GILD,GILT,GIPR,GIW,GK,GLAD,GLADL,GLAQ,GLBE,GLBL,GLBS,GLBZ,GLDB,GLDD,GLEE,GLEEU,GLG,GLHA,GLIBA,GLLI,GLLIU,GLMD,GLNG,GLPI,GLRE,GLSI,GLSPT,GLTO,GLUE,GLUU,GLYC,GMBL,GMBT,GMDA,GMFI,GMFIU,GMGI,GMTX,GMVD,GNAC,GNCA,GNLN,GNMK,GNMX,GNOG,GNPX,GNRS,GNSS,GNTX,GNTY,GNUS,GO,GOBI,GOCO,GOEV,GOGL,GOGO,GOOD,GOOG,GOOGL,GOSS,GOVX,GP,GPAC,GPAQ,GPCO,GPIC,GPRE,GPRO,GRAB",
        "GRAY,GRCY,GREE,GREEL,GRIL,GRIN,GRNA,GRNQ,GROM,GROW,GRPH,GRPN,GRSV,GRSVU,GRTS,GRTX,GRVI,GRWG,GSAQ,GSBC,GSEV,GSHD,GSIT,GSKY,GSM,GSMG,GSRM,GSRMU,GT,GTAC,GTACU,GTBP,GTEC,GTHX,GTIM,GTLB,GTPA,GTPB,GTYH,GTYHW,GURE,GVCI,GVCIU,GVP,GWACU,GWGH,GWII,GWRS,GXII,GYRO,HA,HAAC,HAACU,HABT,HAFC,HAIA,HAIAU,HAIN,HAIR,HALL,HALO,HAPP,HARP,HAS,HAYN,HBAN,HBCP,HBIO,HBK,HBMD,HBNC,HBP,HBT,HCAP,HCAPZ,HCAR,HCAT,HCCC,HCCH,HCCI,HCDI,HCIC,HCICW,HCII,HCKT,HCMA,HCMAU,HCNE,HCOM,HCSG,HCTI,HCVI,HCWB,HDS,HDSN,HEAR,HEAT,HEC,HEES,HELE",
        "HELX,HEPA,HERA,HFBC,HFBL,HFFG,HFWA,HGBL,HGEN,HHGC,HHHHU,HHT,HIBB,HIFS,HIHO,HIII,HILS,HITI,HLAH,HLBZ,HLIT,HLMN,HLNE,HLTH,HLVX,HMCO,HMHC,HMNF,HMPT,HMST,HMSY,HMTA,HMTV,HNNA,HNNAZ,HNRG,HNST,HOFT,HOFV,HOL,HOLI,HOLX,HONE,HOOD,HOOK,HOPE,HORI,HORIU,HOTH,HOUR,HOWL,HPJ,HPK,HPLT,HPT,HQCL,HQI,HQY,HRMY,HROW,HROWL,HRTX,HRZN,HSAC,HSAQ,HSDT,HSIC,HSII,HSKA,HSON,HSTM,HSTO,HTBI,HTBK,HTBX,HTCR,HTGM,HTLD,HTLF,HTOO,HUBG,HUDI,HUGE,HUMA,HURC,HURN,HUT,HVBC,HWBK,HWC,HWCC,HWCPL,HWCPZ,HWEL,HWELU,HWKN,HYFM,HYGS,HYMC,HYPR",
        "HYRE,HYZN,HZNP,IAC,IAIC,IART,IAS,IBCP,IBEX,IBKC,IBKR,IBOC,IBRX,IBTX,ICAD,ICBK,ICCC,ICCH,ICCM,ICFI,ICHR,ICLR,ICMB,ICON,ICPT,ICUI,ICVX,IDAI,IDCC,IDEX,IDN,IDRA,IDSA,IDSY,IDTI,IDXG,IDXX,IDYA,IEA,IEC,IESC,IFBD,IFRX,IGAC,IGAP,IGIC,IGLD,IGLDF,IGMS,IGNY,IGTA,IGTAU,III,IIII,IIN,IINN,IIVI,IKNA,IKT,ILG,ILMN,ILPT,IMAC,IMAQ,IMCC,IMDZ,IMED,IMGN,IMGO,IMI,IMKTA,IMMR,IMMU,IMMX,IMNM,IMPL,IMPP,IMRA,IMRX,IMTE,IMTX,IMUX,IMV,IMVT,IMVTU,IMXI,INAB,INAP,INBK,INBKL,INBKZ,INBX,INCR,INCY,INDB,INDP,INDT,INFI,INFN,INGN",
        "INGP,INKA,INKT,INM,INMB,INMD,INNV,INO,INOD,INOV,INPX,INSE,INSEW,INSG,INSM,INSY,INTA,INTC,INTE,INTEU,INTG,INTI,INTU,INTZ,INVA,INVE,INVO,INVZ,INVZW,INWK,INZY,IOAC,IOACU,IOBT,IONM,IONS,IOSP,IOTS,IOVA,IPA,IPAR,IPAS,IPAX,IPDN,IPGP,IPHS,IPSC,IPVI,IPWR,IQMD,IQMDU,IRDM,IREN,IRIX,IROQ,IRWD,ISAA,ISBC,ISCA,ISEE,ISIG,ISLE,ISNS,ISO,ISPO,ISRG,ISRL,ISSC,ISTR,ITAC,ITAQ,ITAQU,ITCI,ITHX,ITI,ITIC,ITQ,ITRI,ITRM,ITRN,IUSA,IVAC,IVCB,IVCBU,IVCP,IVCPU,IVDA,IXAQ,IZEA,JACK,JAGX,JAKK,JAMF,JAN,JANX,JAQC,JASN,JASNW,JAVA,JAZZ",
        "JBHT,JBLU,JBSS,JCIC,JCS,JCSE,JCTCF,JFBC,JGGC,JGGCU,JJSF,JKHY,JMAC,JMPNZ,JMSB,JNCE,JOAN,JOFF,JOUT,JRSH,JRVR,JSPR,JSPRW,JUGG,JUNS,JUPW,JUPWW,JVA,JWAC,JWACU,JWEL,JYAC,JYNT,JZXN,KACL,KACLU,KAII,KAIR,KALA,KALU,KALV,KANG,KARO,KAVL,KBAL,KBNT,KCAPL,KDNY,KE,KELYA,KELYB,KEQU,KERN,KEYW,KFFB,KFRC,KGJI,KIII,KIN,KINS,KINZ,KIRK,KLAC,KLAQ,KLDO,KLIC,KLTR,KLXE,KMDA,KMPH,KNBE,KNDI,KNSA,KNTE,KNTK,KOD,KOOL,KOPN,KOR,KOSS,KPFS,KPLT,KPRX,KPTI,KRBP,KRMD,KRNL,KRNT,KRNY,KRON,KROS,KRT,KRTX,KRUS,KRYS,KSCP,KSI,KSMTU,KSPN,KTCC",
        "KTEC,KTOS,KTRA,KTTA,KURA,KURI,KVHI,KVSA,KVSB,KVSC,KXIN,KYCH,KYCHU,KYMR,KZR,LAAA,LAB,LABL,LABP,LACQ,LAKE,LAMR,LANC,LAND,LARK,LATG,LATGU,LATN,LAUR,LAX,LAXXU,LAZR,LAZY,LBAI,LBBB,LBBBU,LBC,LBPH,LBRDA,LBRDK,LBTYA,LBTYB,LBTYK,LCA,LCAA,LCFY,LCID,LCNB,LCUT,LDHA,LE,LECO,LEDS,LEGA,LEGH,LEGO,LEND,LESL,LEVL,LEXEA,LEXEB,LEXX,LFAC,LFACU,LFLY,LFMD,LFST,LFTR,LFUS,LFVN,LGAC,LGCY,LGHLW,LGIH,LGMK,LGND,LGO,LGST,LGSTU,LGTO,LGTOU,LGVC,LGVCU,LGVN,LHAA,LHCG,LHDX,LIBY,LIBYU,LIDR,LILA,LILAK,LILM,LINC,LIND,LINK,LION,LIONU,LIQT,LITE",
        "LITM,LITT,LIVB,LIVBU,LIVE,LIVN,LIVX,LIXT,LJAQ,LJPC,LKCO,LKFN,LKQ,LLL,LLNW,LMACA,LMAO,LMAT,LMB,LMDX,LMFA,LMNL,LMNR,LMNX,LMPX,LMST,LNDC,LNSR,LNT,LNTH,LNW,LOAC,LOAN,LOB,LOCO,LOGC,LOGI,LOGM,LONE,LOOP,LOPE,LORL,LOTZ,LOVE,LOXO,LPCN,LPLA,LPRO,LPSN,LPTH,LPTX,LQDA,LQDT,LRCX,LRFC,LRMR,LSAC,LSBK,LSCC,LSEA,LSPR,LSPRU,LSTR,LSXMA,LSXMB,LSXMK,LTBR,LTCH,LTRN,LTRPA,LTRPB,LTRX,LTRY,LTXB,LUCD,LULU,LUMO,LUNA,LUNG,LUXA,LUXAU,LVAC,LVACU,LVGO,LVLU,LVO,LVOX,LVRA,LVTX,LWAC,LWAY,LWLG,LXRX,LYEL,LYFT,LYL,LYLT,LYRA,LYTS,LZ",
        "MAAC,MAAQ,MAAQU,MACA,MACE,MACK,MACQ,MACU,MACUU,MAMS,MANH,MANT,MAPS,MAQC,MAR,MARA,MARK,MASI,MASS,MAT,MATW,MAXN,MAYS,MB,MBCN,MBFI,MBII,MBIN,MBIO,MBND,MBOT,MBRX,MBTC,MBTF,MBUU,MBWM,MCAA,MCAAU,MCACU,MCAE,MCAF,MCAG,MCAGU,MCBC,MCBS,MCFE,MCFT,MCHP,MCHX,MCRB,MCRI,MDB,MDCA,MDCO,MDGL,MDIA,MDJH,MDLZ,MDNA,MDRR,MDRX,MDSO,MDVL,MDWD,MDWT,MDXG,ME,MEAC,MEDP,MEDS,MEET,MEIP,MEKA,MELI,MELR,MEOA,MEOH,MERC,MESA,METC,METCL,METX,MFIN,MFINL,MFNC,MFRM,MFSF,MGEE,MGI,MGIC,MGLN,MGNI,MGPI,MGRC,MGTA,MGTX,MGYR,MHLD,MHUA,MICT",
        "MIDD,MIGI,MIK,MILE,MIME,MIND,MINI,MINM,MIRM,MIRO,MIST,MITA,MITI,MITK,MITSY,MJCO,MKSI,MKTW,MKTX,MKTY,MLAB,MLAC,MLAI,MLAIU,MLAN,MLHR,MLKN,MLNT,MLNX,MLTX,MLVF,MMAC,MMAT,MMDM,MMLP,MMMB,MMSI,MMYT,MNDO,MNDT,MNGA,MNKD,MNMD,MNOV,MNPR,MNRO,MNSB,MNST,MNTA,MNTK,MNTS,MNTV,MNTX,MOBL,MOBQ,MODD,MODV,MOFG,MOGO,MONCU,MORF,MORN,MOTN,MOTS,MOVE,MOXC,MPAA,MPAC,MPB,MPRA,MPRAU,MPVD,MPWR,MQ,MRAC,MRAI,MRAM,MRBK,MRCC,MRCCL,MRCY,MREO,MRIC,MRIN,MRKR,MRLN,MRNA,MRNS,MRSN,MRTI,MRTN,MRTX,MRUS,MRVI,MRVL,MSAC,MSBF,MSBI,MSDA,MSEX",
        "MSFT,MSGM,MSON,MSSAU,MSTR,MSVB,MTAC,MTBC,MTC,MTCH,MTCR,MTEC,MTECW,MTEK,MTEM,MTEX,MTLK,MTRX,MTRY,MTSC,MTSI,MTTR,MU,MUDS,MULN,MURF,MURFU,MVBF,MVIS,MVST,MXCT,MXIM,MXWL,MYFW,MYGN,MYL,MYMD,MYNZ,MYOK,MYOS,MYPS,MYRG,MYSZ,NAAC,NAII,NAKD,NANO,NAOV,NARI,NATH,NATI,NATR,NAUT,NAVG,NAVI,NBAC,NBEV,NBIX,NBN,NBRV,NBSE,NBST,NBSTW,NBTB,NCAC,NCACU,NCBS,NCMI,NCOM,NCSM,NDAC,NDAQ,NDLS,NDRA,NDSN,NEBU,NECB,NEGG,NEO,NEOG,NEON,NEOS,NEPH,NEPT,NERV,NESR,NETE,NETL,NEWA,NEWP,NEWT,NEWTI,NEWTL,NEWTZ,NEXI,NEXT,NFBK,NFE,NFIN,NFLX",
        "NGAC,NGCA,NGHC,NGHCZ,NGM,NGMS,NH,NHIC,NHICU,NHLD,NHTC,NHWK,NICK,NIHD,NILE,NISN,NITE,NKLA,NKSH,NKTR,NKTX,NLIT,NLOK,NLSP,NLTX,NMCI,NMFCL,NMGC,NMIH,NMMC,NMRD,NMRK,NMTC,NMTR,NN,NNBR,NNOX,NOAC,NOBH,NODK,NOEC,NOTV,NOVN,NOVS,NOVT,NOVV,NOVVU,NPAB,NPABU,NPCE,NPTH,NRAC,NRBO,NRC,NRDS,NRIM,NRIX,NRSN,NRXP,NSEC,NSIT,NSPR,NSSC,NSTG,NSTS,NSYS,NTAP,NTCT,NTEC,NTGN,NTGR,NTIC,NTII,NTLA,NTNX,NTRA,NTRB,NTRI,NTRP,NTRS,NTSX,NTUS,NTWK,NUAN,NUBIU,NUCO,NURO,NUTX,NUVA,NUVL,NUWE,NUZE,NVAC,NVACU,NVAX,NVCN,NVCR,NVCT,NVDA,NVEC",
        "NVEE,NVEI,NVFY,NVIV,NVLN,NVMI,NVMM,NVOS,NVSA,NVTR,NVTS,NVVE,NWBI,NWFL,NWL,NWLI,NWPX,NWS,NWSA,NXEO,NXEOW,NXGL,NXGN,NXPI,NXPL,NXST,NXTC,NXTD,NXTM,NXTP,NYMT,NYMX,NYNY,NYXH,OBAS,OBCI,OBLG,OBNK,OBSV,OBT,OCAX,OCC,OCCI,OCDX,OCFC,OCG,OCGN,OCSI,OCSL,OCSLL,OCUL,OCUP,OCX,ODDJ,ODFL,ODP,ODT,OEG,OEPW,OESX,OFED,OFIX,OFLX,OFS,OFSSG,OFSSH,OFSSI,OFSSL,OFSSZ,OGAR,OGI,OHAA,OHAAU,OHAI,OHPA,OHRP,OKTA,OLB,OLBK,OLED,OLIT,OLITU,OLLI,OLMA,OLPX,OM,OMCL,OMED,OMEG,OMER,OMEX,OMGA,OMIC,OMQS,ON,ONB,ONCE,ONCR,ONCS,ONCT",
        "ONCY,ONDS,ONEM,ONEW,ONSM,ONTX,ONVO,ONYX,ONYXU,OP,OPB,OPBK,OPCH,OPEN,OPESU,OPGN,OPHC,OPI,OPINI,OPINL,OPK,OPNT,OPOF,OPRT,OPRX,OPTN,OPTT,ORBC,ORBK,ORGN,ORGO,ORGS,ORIA,ORIC,ORIT,ORLY,ORMP,ORPN,ORRF,ORSN,ORTX,OSBC,OSIR,OSIS,OSMT,OSPN,OSS,OST,OSTK,OSTR,OSUR,OSW,OTEC,OTEL,OTEX,OTIC,OTIV,OTLK,OTMO,OTRA,OTRK,OTTR,OTTW,OVBC,OVID,OVLY,OXAC,OXBR,OXFD,OXLC,OXLCZ,OXSQ,OXSQG,OXSQL,OXSQZ,OXUS,OYST,OZK,PAAC,PAAS,PACB,PACQ,PACW,PACX,PAE,PAFO,PAHC,PALI,PALT,PAND,PANL,PAQC,PARA,PARAA,PARD,PASG,PATI,PATK,PAVM,PAX",
        "PAYA,PAYO,PAYS,PAYX,PBAX,PBBI,PBBK,PBCT,PBFS,PBHC,PBIP,PBLA,PBNC,PBPB,PBTS,PBYI,PCAR,PCCT,PCCTU,PCH,PCMI,PCOM,PCRX,PCSA,PCSB,PCT,PCTI,PCTY,PCVX,PCX,PCXCU,PCYG,PCYO,PDCE,PDCO,PDEX,PDFS,PDLB,PDLI,PDSB,PEAR,PEBK,PEBO,PECO,PEDH,PEGA,PEGI,PEGR,PEGRU,PEGY,PENN,PEP,PEPL,PERI,PESI,PETQ,PETS,PETV,PETX,PETZ,PFBI,PFC,PFDR,PFG,PFHD,PFIE,PFIN,PFIS,PFMT,PFPT,PFSW,PFTA,PFX,PFXNL,PFXNZ,PGC,PGEN,PGLC,PGNX,PGNY,PGRW,PGRX,PHAS,PHAT,PHCF,PHIC,PHIO,PHUN,PHVS,PI,PIII,PIK,PINC,PIRS,PIXY,PKBK,PKOH,PLAB,PLAOU,PLAY",
        "PLBC,PLBY,PLCE,PLL,PLMI,PLMR,PLPC,PLRX,PLSE,PLTEU,PLTK,PLUG,PLXP,PLXS,PLYA,PMBC,PMCB,PMD,PME,PMGM,PMTS,PMVP,PNBK,PNFP,PNNTG,PNRG,PNT,PNTG,PNTR,POAI,PODD,POET,POLA,PONO,POOL,POSH,POW,POWI,POWL,POWW,PPBI,PPC,PPD,PPHI,PPHP,PPIH,PPSI,PPTA,PPYA,PPYAU,PRAA,PRAH,PRAX,PRCH,PRCP,PRCT,PRDO,PRDS,PRFT,PRFX,PRGS,PRGX,PRIM,PRLD,PRLH,PRLHU,PRNB,PROC,PROF,PROV,PRPH,PRPL,PRPO,PRQR,PRSC,PRSO,PRSR,PRTA,PRTG,PRTH,PRTK,PRTS,PRVA,PRVB,PRVL,PS,PSAG,PSDO,PSEC,PSHG,PSMT,PSNL,PSTI,PSTV,PSTX,PSYS,PTC,PTCT,PTE,PTEN",
        "PTGX,PTI,PTIC,PTIX,PTLA,PTLO,PTMN,PTOC,PTON,PTPI,PTRA,PTRS,PTSI,PTVCA,PTVCB,PTVE,PUB,PUBM,PUCK,PULM,PVAC,PVBC,PWFL,PWOD,PWP,PWUP,PWUPU,PXLW,PXMD,PXS,PYCR,PYDS,PYPD,PYPL,PYR,PYXS,PZZA,QADA,QADB,QBAK,QCOM,QCRH,QDEL,QELL,QIPT,QLGN,QLI,QLYS,QMAR,QMCO,QNST,QQQX,QRHC,QRTEA,QRTEB,QRVO,QSI,QTEK,QTNA,QTNT,QTRH,QTRX,QUBT,QUIK,QUMU,RACB,RACY,RACYU,RADA,RADI,RAIL,RAIN,RAM,RAND,RANI,RAPT,RARE,RARX,RAVE,RAVN,RBB,RBBN,RBCAA,RBCN,RBKB,RBNC,RBZ,RCAC,RCACU,RCAT,RCHG,RCII,RCKT,RCKY,RCLF,RCM,RCMT,RCON,RCRT,RDBX",
        "RDCM,RDFN,RDI,RDIB,RDNT,RDUS,RDVT,RDWR,REAL,REAX,REE,REED,REFI,REFR,REG,REGI,REGN,REKR,RELI,RELL,RELV,RELY,RENO,RENT,REPL,REPR,RESN,RESP,RETA,RETO,REVB,REVE,REVH,REYN,RFAC,RFACU,RFIL,RGCO,RGEN,RGF,RGLD,RGLS,RGNX,RGP,RGTI,RHDM,RIBT,RICK,RICO,RIDE,RIGL,RILY,RILYG,RILYH,RILYI,RILYM,RILYN,RILYO,RILYT,RILYZ,RIOT,RITA,RIVE,RIVN,RKDA,RKLB,RLAY,RLMD,RLYB,RMBI,RMBL,RMBS,RMCF,RMGC,RMNI,RMR,RMRM,RMTI,RNA,RNAZ,RNDB,RNER,RNET,RNST,RNW,RNWK,RNXT,ROAD,ROC,ROCAU,ROCC,ROCG,ROCK,ROCL,ROCLU,ROCR,ROIC,ROIV,ROKU,ROLL",
        "ROOT,ROSE,ROST,ROVR,RP,RPAY,RPD,RPHM,RPID,RPRX,RPTX,RRBI,RRGB,RRR,RSLS,RSSS,RSTN,RSVR,RTL,RTRX,RTTR,RTWI,RUBY,RUN,RUSHA,RUSHB,RUTH,RVAC,RVACU,RVEN,RVLP,RVLT,RVMD,RVNC,RVPH,RVSB,RVSN,RWAY,RWLK,RWOD,RWODU,RXDX,RXRA,RXRX,RXST,RXT,RYTM,RZLT,SABR,SABS,SAEX,SAFM,SAFT,SAGA,SAGAU,SAGE,SAIA,SAII,SAL,SALM,SAMA,SAMG,SANA,SANB,SANG,SANM,SANW,SASR,SATL,SATS,SAUC,SAVA,SBAC,SBBP,SBBX,SBCF,SBEA,SBET,SBFG,SBFM,SBGI,SBLK,SBLKZ,SBNY,SBRA,SBSI,SBT,SBTX,SBUX,SCAC,SCACW,SCAQ,SCHL,SCHN,SCKT,SCLE,SCMA,SCMAU,SCOA,SCOB",
        "SCON,SCPL,SCPS,SCR,SCRM,SCRMU,SCSC,SCTL,SCTY,SCVL,SCWX,SCYX,SDAC,SDC,SDGR,SDH,SDIG,SEAC,SEAT,SEDG,SEED,SEEL,SEER,SEIC,SELB,SELF,SEMI,SENEA,SENEB,SERA,SESN,SEV,SEVN,SFBC,SFIX,SFLY,SFM,SFNC,SFST,SFT,SGA,SGBX,SGC,SGEN,SGH,SGHL,SGHLU,SGHT,SGIC,SGII,SGIIU,SGLB,SGLY,SGMA,SGML,SGMO,SGRP,SGRY,SGTX,SGYP,SHAC,SHBI,SHC,SHCA,SHCAU,SHCR,SHEN,SHIP,SHLO,SHLS,SHOO,SHOS,SHQA,SHSP,SHUA,SHUAU,SHYF,SIBN,SIC,SIDU,SIEB,SIEN,SIER,SIERU,SIFI,SIGA,SIGI,SILC,SILK,SINA,SINT,SIOX,SIRI,SISI,SITM,SITO,SIVB,SJ,SKIN,SKIS",
        "SKYA,SKYAU,SKYE,SKYT,SKYW,SKYX,SLAB,SLAM,SLCR,SLCRU,SLCT,SLDB,SLDP,SLGC,SLGG,SLGL,SLGN,SLHG,SLM,SLNG,SLNH,SLNO,SLP,SLRC,SLRX,SLS,SLVR,SMAP,SMAPU,SMBC,SMBK,SMCI,SMED,SMFL,SMFR,SMID,SMIH,SMIT,SMLR,SMMF,SMPL,SMSA,SMSI,SMTC,SMTI,SMTK,SMTX,SNAX,SNBP,SNBR,SNCE,SNCR,SNCRL,SNCY,SND,SNDE,SNDL,SNDX,SNES,SNEX,SNFCA,SNGX,SNH,SNNA,SNOA,SNPO,SNPS,SNPX,SNRH,SNSE,SNT,SNTG,SOFI,SOFO,SOHO,SOLO,SOLR,SOLY,SOND,SONG,SONM,SONN,SONO,SOPA,SOPH,SORL,SOTK,SOUN,SOVO,SP,SPCB,SPCM,SPCMU,SPEL,SPFI,SPHS,SPK,SPKB,SPLK,SPNE",
        "SPNS,SPOK,SPPI,SPRB,SPRC,SPRO,SPRT,SPSC,SPT,SPTK,SPTN,SPWH,SPWR,SQBG,SQFT,SQL,SRAD,SRAX,SRCE,SRCH,SRCL,SRDX,SREV,SRGA,SRNE,SRNG,SRPT,SRRA,SRRK,SRSA,SRTS,SRZN,SSAA,SSB,SSBI,SSBK,SSFN,SSIC,SSKN,SSNC,SSNT,SSP,SSRM,SSSS,SSSSL,SSTI,SSYS,STAA,STAB,STAF,STAY,STB,STBA,STBK,STCN,STEP,STER,STFC,STFR,STGW,STIM,STKL,STKS,STLD,STLRU,STML,STMP,STND,STNE,STNL,STOK,STPP,STRA,STRC,STRL,STRM,STRN,STRO,STRR,STRS,STRT,STSA,STSS,STTK,STWO,STX,STXB,SUMO,SUMR,SUNS,SUNW,SUPN,SURF,SURG,SV,SVA,SVBI,SVC,SVFA,SVFB",
        "SVFC,SVFD,SVNA,SVNAU,SVOK,SVRA,SVVC,SWAG,SWAV,SWBI,SWET,SWIM,SWIR,SWKH,SWKS,SWSS,SWTX,SWVL,SXTC,SYBT,SYBX,SYKE,SYNA,SYNC,SYNH,SYNL,SYPR,SYRS,SYTA,SZZL,SZZLU,TA,TACO,TACT,TAIT,TALK,TALS,TANH,TAOP,TAPR,TARA,TARS,TASK,TAST,TATT,TAYD,TBBK,TBCP,TBIO,TBK,TBLA,TBLD,TBLT,TBNK,TBPH,TBSA,TCAC,TCBC,TCBI,TCBIL,TCBIW,TCBK,TCBS,TCBX,TCCO,TCDA,TCFC,TCLD,TCMD,TCON,TCPC,TCRR,TCRT,TCRX,TCVA,TCX,TDSC,TDUP,TEAM,TECD,TECH,TEKK,TELA,TELL,TENB,TENX,TER,TERN,TERP,TESS,TETC,TETE,TETEU,TEUM,TFCF,TFCFA,TFFP,TFM,TFSL,TGA",
        "TGAA,TGAAU,TGAN,TGEN,TGTX,TGVC,TGVCU,TH,THAC,THACU,THBR,THCA,THCP,THER,THFF,THMO,THOR,THRM,THRN,THRX,THRY,THTX,TIBR,TIG,TIGO,TIL,TILE,TIOA,TIPT,TIRX,TISA,TITN,TIVC,TIVO,TKNO,TLF,TLGT,TLGY,TLGYU,TLIS,TLMD,TLRY,TLS,TMC,TMCI,TMCX,TMDI,TMDX,TMKR,TMPM,TMTS,TMUS,TNAV,TNDM,TNGX,TNON,TNT,TNXP,TNYA,TOAC,TOACU,TOI,TOIIW,TOMZ,TOPS,TORM,TOTA,TOWN,TPAY,TPBA,TPCO,TPG,TPIC,TPNL,TPST,TPTX,TRCB,TRCH,TRDA,TREE,TRHC,TRIL,TRIN,TRIP,TRIT,TRKA,TRMB,TRMD,TRMK,TRMT,TRNS,TRNX,TRON,TROO,TROV,TROW,TRPL,TRS,TRST,TRUE",
        "TRUP,TRVI,TRVN,TSAT,TSBK,TSC,TSCO,TSEM,TSG,TSHA,TSIB,TSLA,TSRI,TSRO,TST,TSVT,TTCF,TTCFW,TTD,TTEC,TTEK,TTGT,TTMI,TTNP,TTOO,TTPH,TTS,TTSH,TTWO,TUEM,TUES,TULY,TURN,TUSK,TVTX,TVTY,TW,TWCB,TWCT,TWIN,TWKS,TWLV,TWNK,TWOU,TWST,TXG,TXMD,TXN,TXRH,TYME,TYPE,TYRA,TZOO,TZPS,UBCP,UBFO,UBNK,UBNT,UBOH,UBSI,UBX,UCBI,UCFC,UCTT,UDMY,UEIC,UFCS,UFPI,UFPT,UG,UGCE,UGRO,UHAL,UIHC,UK,ULBI,ULCC,ULH,ULTA,ULTI,UMBF,UMPQ,UNAM,UNB,UNCY,UNIT,UNTY,UONE,UONEK,UPC,UPL,UPLD,UPST,UPTD,UPTDU,UPWK,URBN,URGN,UROV,UROY",
        "USAK,USAP,USAT,USAU,USCB,USCR,USCT,USCTU,USEG,USIO,USLM,USWS,UTAA,UTAAU,UTHR,UTMD,UTME,UTRS,UTSI,UVSP,VABK,VACQ,VALU,VAQC,VAXX,VBFC,VBIV,VBLT,VBNK,VBOC,VBOCU,VBTX,VC,VCEL,VCKA,VCNX,VCSA,VCTR,VCVC,VCXA,VCYT,VEAC,VEACW,VECO,VECT,VEEE,VELO,VENA,VERA,VERB,VERI,VERO,VERU,VERV,VERX,VERY,VEV,VFF,VGFC,VHNA,VHNAU,VIA,VIAB,VIAV,VICR,VIE,VIEW,VIGL,VIH,VII,VINC,VINCW,VINO,VINP,VIR,VIRC,VIRI,VIRT,VIRX,VISL,VISN,VITL,VIVE,VIVK,VIVO,VKTX,VLAT,VLCN,VLDR,VLGEA,VLNS,VLON,VLRX,VLY,VMAC,VMACU,VMAR,VMCA,VMCAU,VMD",
        "VMEO,VMET,VMGA,VMGAU,VNDA,VOR,VORB,VOSO,VOXX,VPCB,VQS,VRA,VRAR,VRAY,VRCA,VRDN,VREX,VRM,VRME,VRML,VRNS,VRNT,VRPX,VRRM,VRRMW,VRSK,VRSN,VRTS,VRTU,VRTX,VS,VSAC,VSACU,VSAT,VSEC,VSPR,VSTA,VSTM,VTAQ,VTGN,VTIQ,VTNR,VTRS,VTRU,VTSI,VTYX,VUZI,VVOS,VVPR,VVUS,VWE,VWTR,VXRT,VYGR,VYNE,VYNT,WABC,WAFD,WAFU,WALD,WASH,WATT,WAVD,WAVS,WAVSU,WBA,WBD,WCFB,WDAY,WDC,WDFC,WEBK,WEJO,WEN,WERN,WETF,WEYS,WFCF,WFRD,WHF,WHFBZ,WHLM,WHLR,WHLRL,WHLRW,WIFI,WILC,WINA,WING,WINN,WINS,WINT,WINV,WIRE,WISA,WISH,WIX,WKHS,WKME,WKSP",
        "WLDN,WLFC,WMG,WMGI,WMGIZ,WMPN,WNEB,WNW,WOOF,WORX,WPRT,WRAP,WRLD,WRPT,WRTC,WSBC,WSBF,WSC,WSFS,WSTG,WSTL,WTBA,WTER,WTFC,WTMA,WTMAU,WTRE,WTRH,WTW,WULF,WVE,WVFC,WVVI,WW,WWAC,WWACU,WWD,WWR,WYNN,XAIR,XBIO,XBIT,XCUR,XEL,XELA,XELB,XENE,XENT,XERS,XFIN,XFINU,XFOR,XGN,XLNX,XLO,XLRN,XM,XMTR,XNCR,XOG,XOMA,XON,XONE,XOS,XP,XPAX,XPDB,XPDBU,XPDI,XPEL,XPER,XPON,XRAY,XRTX,XSPA,XXII,YAYO,YELL,YGMZ,YGTY,YGYI,YMAB,YMTX,YNDX,YORW,YOTAU,YRIV,YTEN,YTRA,YVR,Z,ZAGG,ZBRA,ZCMD,ZD,ZENV,ZEST,ZEUS,ZG,ZGNX",
        "ZGYH,ZI,ZIMV,ZING,ZINGU,ZION,ZIONL,ZIOP,ZIVO,ZIXI,ZKIN,ZM,ZN,ZNGA,ZNTE,ZNTL,ZS,ZSAN,ZT,ZTEK,ZUMZ,ZVO,ZWRK,ZY,ZYNE,ZYXI",

        // Stocks in NYSE
        "A,AA,AAC,AAIC,AAIN,AAN,AAP,AAQC,AAT,AB,ABB,ABBV,ABC,ABEV,ABG,ABM,ABR,ABT,AC,ACA,ACAQ,ACC,ACCO,ACDI,ACEL,ACH,ACHR,ACI,ACII,ACM,ACN,ACND,ACP,ACR,ACRE,ACRO,ADC,ADF,ADM,ADNT,ADSW,ADT,ADX,AEE,AEFC,AEG,AEL,AEM,AEO,AER,AES,AESC,AEVA,AFB,AFG,AFGH,AFI,AFL,AFT,AFTR,AG,AGAC,AGCB,AGCO,AGD,AGI,AGL,AGM,AGN,AGO,AGR,AGRO,AGS,AGTI,AGX,AHC,AHH,AHT,AI,AIC,AIF,AIG,AIN,AIO,AIR,AIRC,AIT,AIV,AIW,AIY,AIZ,AIZN,AJG,AJRD,AJX,AJXA,AKR,AKS,AL,ALB",
        "ALC,ALCC,ALE,ALEX,ALG,ALK,ALL,ALLE,ALLG,ALLY,ALSN,ALTG,ALUS,ALV,ALX,AM,AMAM,AMBP,AMC,AME,AMG,AMH,AMID,AMK,AMN,AMP,AMPI,AMPS,AMPY,AMRC,AMRX,AMT,AMWL,AN,ANDX,ANET,ANF,ANFI,ANH,ANTM,ANVS,AOD,AOMR,AON,AORT,AOS,AP,APAM,APC,APCA,APD,APG,APGB,APH,APLE,APN,APO,APRN,APTV,APU,APY,AQ,AQN,AQNA,AQNB,AQNU,AQUA,AR,ARA,ARC,ARCH,ARCO,ARD,ARDC,ARE,ARES,ARGD,ARGO,ARI,ARL,ARLO,ARMK,ARNC,AROC,ARR,ARW,ASA,ASAI,ASAN,ASAQ,ASB,ASC,ASG,ASGI,ASGN,ASH,ASIX,ASPN,ASR,ASXC",
        "ASZ,AT,ATA,ATAQ,ATC,ATEK,ATEN,ATGE,ATH,ATI,ATIP,ATKR,ATO,ATOR,ATR,ATTO,ATUS,AUD,AUO,AUS,AUST,AUY,AVA,AVAL,AVB,AVD,AVH,AVLR,AVLV,AVNS,AVNT,AVP,AVX,AVY,AVYA,AWF,AWI,AWK,AWP,AWR,AX,AXAC,AXE,AXH,AXL,AXO,AXP,AXR,AXS,AXTA,AYI,AYR,AYX,AZEK,AZO,AZRE,AZZ,B,BA,BAC,BACA,BAF,BAH,BALL,BALY,BAM,BAMH,BAMI,BAMR,BANC,BAP,BARK,BAS,BAX,BB,BBAI,BBAR,BBCO,BBDC,BBDO,BBF,BBK,BBL,BBLN,BBN,BBT,BBU,BBUC,BBVA,BBW,BBWI,BBY,BC,BCAT,BCC,BCE,BCH,BCO,BCRH,BCSF",
        "BCX,BDC,BDJ,BDN,BDX,BE,BEKE,BEN,BEP,BEPC,BEPH,BEPI,BERY,BFAC,BFAM,BFH,BFK,BFO,BFS,BFT,BFY,BFZ,BG,BGB,BGG,BGH,BGIO,BGR,BGS,BGSF,BGSX,BGT,BGX,BGY,BH,BHC,BHE,BHG,BHIL,BHK,BHLB,BHP,BHR,BHV,BHVN,BID,BIG,BIGZ,BILL,BIO,BIP,BIPC,BIPH,BIPI,BIT,BITE,BJ,BK,BKD,BKE,BKH,BKI,BKK,BKKT,BKN,BKS,BKSY,BKT,BKU,BLCO,BLD,BLE,BLK,BLL,BLND,BLUA,BLW,BLX,BMAC,BME,BMI,BMO,BMRG,BMY,BNED,BNL,BNS,BNY,BOAC,BOAS,BOC,BODY,BOE,BOH,BOOT,BORR,BOWL,BOX,BOXD,BPL",
        "BPMP,BPT,BQ,BQH,BR,BRBR,BRC,BRCC,BRD,BRDG,BRDS,BRFS,BRMK,BRO,BROS,BRSP,BRT,BRW,BRX,BSA,BSAQ,BSD,BSE,BSIG,BSL,BSM,BSN,BST,BSTZ,BSX,BTA,BTCM,BTE,BTI,BTO,BTRY,BTT,BTU,BTZ,BUI,BUR,BURL,BVH,BW,BWA,BWG,BWNB,BWSN,BWXT,BX,BXC,BXG,BXMT,BXMX,BXP,BXSL,BY,BYD,BYM,BYN,BZH,BZM,C,CAAP,CABO,CACI,CADE,CAE,CAF,CAG,CAH,CAI,CAL,CALX,CANG,CANO,CAP,CAPL,CARR,CARS,CAS,CAT,CATO,CB,CBB,CBL,CBM,CBPX,CBS,CBT,CBU,CBZ,CC,CCAC,CCCS,CCI,CCIV,CCJ,CCK,CCL",
        "CCO,CCR,CCS,CCV,CCVI,CCX,CDAY,CDE,CDR,CDRE,CE,CEA,CEE,CEIX,CEL,CEM,CEN,CEQP,CF,CFG,CFR,CFXA,CGA,CGAU,CHA,CHAA,CHAP,CHCT,CHD,CHE,CHGG,CHH,CHKR,CHMI,CHMT,CHN,CHPT,CHRA,CHRB,CHS,CHSP,CHWY,CI,CIA,CIAN,CIC,CIEN,CIF,CII,CIM,CINT,CIO,CION,CIR,CISN,CIT,CIVI,CIXX,CJ,CKH,CL,CLA,CLAA,CLB,CLBR,CLDR,CLDT,CLF,CLGX,CLH,CLII,CLIM,CLPR,CLR,CLS,CLVT,CLW,CLX,CM,CMA,CMC,CMCM,CMD,CMG,CMI,CMO,CMP,CMRE,CMS,CMSA,CMSC,CMSD,CMTG,CMU,CNA,CNC,CND,CNDA,CNDB,CNHI",
        "CNI,CNK,CNM,CNNE,CNO,CNP,CNQ,CNR,CNS,CNVY,CNX,CNXM,CO,CODI,COF,COG,COLD,COLE,COMP,COO,COOK,COP,COR,CORR,CORS,COTY,COUR,CP,CPA,CPAC,CPB,CPE,CPF,CPG,CPK,CPLG,CPNG,CPRI,CPS,CPSR,CPT,CPTK,CPUH,CR,CRC,CRCM,CRGY,CRHC,CRI,CRK,CRL,CRM,CRR,CRS,CRU,CS,CSAN,CSL,CSLT,CSPR,CSR,CSS,CSTA,CSTM,CSV,CTAA,CTB,CTBB,CTDD,CTL,CTLT,CTO,CTOS,CTR,CTS,CTST,CTT,CTV,CTVA,CTY,CTZ,CUB,CUBB,CUBE,CUBI,CUK,CULP,CURO,CURV,CUZ,CVA,CVE,CVEO,CVI,CVIA,CVII,CVNA,CVS,CVX,CW",
        "CWAN,CWEN,CWH,CWK,CWT,CXAC,CXE,CXH,CXM,CXO,CXP,CXW,CYD,CYH,CZOO,CZZ,D,DAC,DAL,DAN,DAO,DAR,DASH,DATA,DAVA,DB,DBD,DBI,DBL,DBRG,DCF,DCI,DCO,DCUE,DD,DDD,DDF,DDS,DE,DEA,DECK,DEI,DEN,DESP,DEX,DF,DFIN,DFNS,DFP,DFS,DG,DGNR,DGX,DHF,DHI,DHR,DHT,DHX,DIAX,DIN,DINO,DIS,DK,DKL,DKS,DLB,DLPH,DLR,DLX,DLY,DM,DMA,DMB,DMO,DMS,DNA,DNB,DNI,DNK,DNMR,DNOW,DNP,DNR,DNZ,DO,DOC,DOCN,DOCS,DOLE,DOMA,DOOR,DOUG,DOV,DOW,DOYU,DPG,DPLO,DPZ,DQ,DRE",
        "DRH,DRI,DRQ,DRS,DRUA,DS,DSAQ,DSCF,DSE,DSG,DSL,DSM,DSSI,DSU,DSX,DT,DTB,DTC,DTE,DTF,DTG,DTM,DTP,DTQ,DUC,DUK,DUKB,DV,DVA,DVD,DVN,DVOL,DWIN,DX,DXC,DY,DYFN,E,EAB,EAE,EAF,EAI,EARN,EAT,EB,EBF,EBS,ECAT,ECC,ECCV,ECCW,ECCX,ECCY,ECL,ECOM,ECT,ECVT,ED,EDD,EDF,EDI,EDR,EE,EEA,EEX,EFC,EFF,EFL,EFR,EFT,EFX,EGF,EGGF,EGIF,EGO,EGP,EGY,EHC,EHI,EHT,EIC,EIG,EIX,EL,ELAN,ELAT,ELC,ELJ,ELP,ELS,ELU,ELVT,ELY,EMD,EME,EMF,EMN,EMO,EMP,EMR",
        "ENB,ENBA,ENFN,ENLC,ENOV,ENPC,ENR,ENS,ENV,ENVA,ENZ,EOCW,EOD,EOG,EOI,EOS,EOT,EPAC,EPAM,EPC,EPR,EPRT,EPWR,EQC,EQD,EQH,EQHA,EQM,EQR,EQS,EQT,ERF,ERO,ES,ESAB,ESE,ESGC,ESI,ESM,ESMT,ESNT,ESRT,ESS,ESTC,ESTE,ESUS,ESV,ET,ETB,ETD,ETG,ETJ,ETN,ETO,ETR,ETRN,ETV,ETW,ETWO,ETX,ETY,EURN,EV,EVA,EVC,EVE,EVEX,EVF,EVG,EVH,EVN,EVR,EVRG,EVRI,EVT,EVTC,EVTL,EW,EXD,EXG,EXK,EXP,EXPR,EXR,EXTN,EZT,F,FACA,FAF,FAM,FATH,FBC,FBHS,FBK,FBM,FBP,FBRT,FC,FCAX,FCF",
        "FCN,FCPT,FCRW,FCRX,FCRZ,FCT,FCX,FDC,FDEU,FDP,FDS,FDX,FE,FEDL,FEDM,FEHY,FEI,FEIG,FELP,FENG,FEO,FERG,FET,FEUS,FF,FFA,FFG,FG,FGB,FGP,FHI,FHN,FHS,FICO,FIF,FIGS,FINS,FIS,FIT,FIV,FIX,FL,FLAG,FLC,FLME,FLNG,FLO,FLOW,FLR,FLS,FLT,FLYA,FMC,FMN,FMO,FMY,FN,FNA,FNB,FND,FNF,FNV,FOA,FOE,FOF,FOR,FOUR,FPAC,FPH,FPI,FPL,FR,FRA,FRC,FREY,FRF,FRGE,FRO,FRT,FRX,FRXB,FSB,FSD,FSK,FSKR,FSLF,FSM,FSNB,FSPR,FSR,FSS,FST,FT,FTCH,FTEV,FTHY,FTI,FTK,FTS,FTSI",
        "FTV,FUL,FUN,FVIV,FVRR,FVT,FXLV,FZT,G,GAB,GAM,GAPA,GAQ,GATO,GATX,GB,GBAB,GBL,GBLL,GBX,GCAP,GCI,GCO,GCP,GCV,GD,GDDY,GDL,GDO,GDOT,GDV,GE,GEF,GEN,GENI,GEO,GER,GES,GF,GFF,GFIS,GFL,GFLU,GFOR,GFX,GFY,GGB,GGG,GGM,GGT,GGZ,GHC,GHL,GHLD,GHM,GHY,GIA,GIB,GIC,GIL,GIM,GIS,GKOS,GL,GLOB,GLOG,GLOP,GLS,GLT,GLW,GM,GME,GMED,GMRE,GMS,GMTA,GMZ,GNC,GNE,GNK,GNL,GNPK,GNRC,GNS,GNT,GNW,GOAC,GOED,GOF,GOGN,GOLF,GOOS,GOTU,GPC,GPI,GPJA,GPK,GPM,GPMT,GPN",
        "GPRK,GPS,GPX,GRA,GRAF,GRC,GRUB,GRX,GS,GSBD,GSH,GSL,GSLD,GSQB,GSQD,GSX,GTES,GTN,GTS,GTT,GTY,GUG,GUT,GVA,GWB,GWH,GWR,GWRE,GWW,GXO,H,HAE,HAL,HASI,HAYW,HBB,HBI,HBM,HCA,HCC,HCHC,HCI,HCR,HCXY,HCXZ,HD,HDB,HE,HEI,HEQ,HES,HESM,HFRO,HGH,HGLB,HGTY,HGV,HHC,HI,HIE,HIFR,HIG,HIGA,HII,HIL,HIMS,HIO,HIPO,HIW,HIX,HK,HKD,HL,HLF,HLGN,HLI,HLLY,HLT,HLX,HMA,HMLP,HMN,HMY,HNGR,HNI,HNP,HNRA,HOG,HOME,HOMS,HOS,HOV,HP,HPE,HPP,HPQ,HPR,HPX,HQH,HQL",
        "HR,HRB,HRC,HRI,HRL,HRT,HRTG,HSC,HSY,HT,HTA,HTAQ,HTD,HTFA,HTFB,HTGC,HTH,HTPA,HTY,HUBB,HUBS,HUD,HUGS,HUM,HUN,HVT,HWKZ,HWM,HXL,HY,HYB,HYI,HYLN,HYT,HZAC,HZN,HZO,HZON,I,IAA,IACA,IACB,IACC,IAE,IAG,IBER,IBM,IBN,IBP,ICD,ICE,ICL,ICNC,IDA,IDE,IDT,IEX,IFED,IFF,IFN,IFS,IGA,IGD,IGI,IGR,IGT,IHC,IHD,IHIT,IHS,IHTA,IIAC,IID,IIF,IIM,IIPR,IMAX,INB,INF,INFA,ING,INGR,INN,INS,INSI,INST,INSW,INT,INVH,INXN,IO,IONQ,IOT,IP,IPG,IPI,IPOB,IPOC,IPOD,IPOE",
        "IPOF,IPVA,IPVF,IQI,IQV,IR,IRET,IRL,IRM,IRNT,IRR,IRRX,IRS,IRT,IS,ISD,IT,ITGR,ITT,ITW,IVAN,IVC,IVH,IVR,IVT,IVZ,JAG,JATT,JAX,JBGS,JBI,JBL,JBT,JCAP,JCE,JCI,JCO,JCP,JDD,JE,JEF,JELD,JEMD,JEQ,JFR,JGH,JHAA,JHB,JHD,JHG,JHI,JHS,JHY,JIB,JILL,JLL,JLS,JMF,JMLP,JMM,JMP,JMPE,JMT,JNJ,JNPR,JOBY,JOE,JOF,JP,JPM,JQC,JRI,JRO,JRS,JSD,JTA,JTD,JUN,JWN,JWSM,JXN,K,KAHC,KAI,KAMN,KAR,KBH,KBR,KCAC,KCGI,KD,KEG,KEM,KEN,KEP,KEX,KEY,KEYS,KF,KFS",
        "KFY,KGC,KIM,KIND,KIO,KKR,KKRS,KL,KLC,KLR,KMB,KMF,KMI,KMPR,KMT,KMX,KN,KNL,KNSW,KNX,KO,KODK,KOP,KORE,KOS,KR,KRA,KRC,KREF,KRG,KRO,KRP,KSM,KSS,KSU,KTB,KTF,KUKE,KW,KWAC,KWR,KYN,L,LAC,LAD,LADR,LAW,LAZ,LB,LBRT,LC,LCI,LCII,LCW,LDL,LDOS,LEA,LEAF,LEG,LEJU,LEN,LEO,LEV,LEVI,LFG,LFT,LGC,LGI,LGV,LH,LHC,LHX,LICY,LII,LIN,LITB,LKSD,LL,LLAP,LLY,LM,LMHA,LMHB,LMND,LMT,LNC,LNFA,LNN,LOCC,LOCL,LOKB,LOKM,LOR,LOW,LPG,LPI,LPT,LPX,LRN,LSI",
        "LSPD,LTC,LTH,LTHM,LU,LUB,LUMN,LUV,LVS,LW,LXFR,LXP,LXU,LYB,LYV,LZB,M,MA,MAA,MAC,MACC,MAIN,MAN,MANU,MAS,MATX,MAV,MAX,MAXR,MBAC,MBI,MBSC,MBT,MC,MCA,MCB,MCC,MCD,MCG,MCI,MCK,MCN,MCO,MCR,MCRN,MCS,MCV,MCW,MCX,MCY,MD,MDC,MDLA,MDLQ,MDLX,MDLY,MDP,MDR,MDT,MDU,MDV,MEC,MED,MEG,MEGI,MEI,MEN,MET,MFA,MFAC,MFC,MFD,MFGP,MFL,MFM,MFO,MFT,MFV,MG,MGA,MGF,MGM,MGP,MGR,MGRB,MGU,MGY,MHD,MHE,MHF,MHI,MHK,MHLA,MHN,MHNC,MHO,MIC,MIE,MIN,MINO",
        "MIO,MIR,MIT,MITT,MIXT,MIY,MKC,MKFG,MKL,ML,MLI,MLM,MLNK,MLP,MLR,MMC,MMD,MMI,MMM,MMP,MMS,MMT,MMU,MN,MNE,MNK,MNP,MNR,MNRL,MNSO,MNTN,MO,MOD,MODN,MOGU,MOH,MOS,MOTV,MOV,MP,MPA,MPC,MPLN,MPLX,MPO,MPV,MPW,MPX,MQT,MQY,MR,MRC,MRK,MRO,MRT,MS,MSA,MSB,MSCI,MSD,MSG,MSGE,MSGN,MSGS,MSI,MSL,MSM,MSP,MT,MTAL,MTB,MTCN,MTD,MTDR,MTG,MTH,MTN,MTOR,MTRN,MTT,MTVC,MTW,MTX,MTZ,MUA,MUC,MUE,MUH,MUI,MUJ,MUR,MUS,MUSA,MUX,MVC,MVCD,MVF,MVT,MWA,MX",
        "MXE,MXF,MYC,MYD,MYE,MYF,MYI,MYJ,MYN,MYOV,MYTE,MZA,NABL,NAC,NAD,NAN,NAPA,NAT,NAV,NAZ,NBB,NBHC,NBR,NBXG,NC,NCA,NCB,NCI,NCR,NDMO,NDP,NE,NEA,NEE,NEM,NEP,NET,NETC,NETI,NEU,NEV,NEW,NEWR,NEX,NEXA,NFC,NFG,NFH,NFJ,NFNT,NFYS,NGAB,NGC,NGG,NGL,NGS,NGVC,NGVT,NHA,NHF,NHI,NI,NIC,NID,NIM,NIMC,NIQ,NJR,NJV,NKE,NKG,NKX,NL,NLS,NLSN,NLY,NM,NMAI,NMCO,NMFX,NMG,NMI,NMS,NMT,NMY,NMZ,NNA,NNC,NNI,NNN,NNY,NOA,NOAH,NOC,NOG,NOM,NOMD,NOV,NOW,NP",
        "NPCT,NPK,NPN,NPO,NPTN,NPV,NQP,NR,NRDY,NRE,NREF,NRG,NRGV,NRK,NRUC,NRZ,NSA,NSC,NSH,NSL,NSP,NSR,NSS,NSTB,NSTD,NTB,NTC,NTCO,NTG,NTP,NTR,NTX,NTZ,NU,NUE,NUM,NUO,NUS,NUV,NUVB,NUW,NVG,NVGS,NVO,NVR,NVRO,NVST,NVTA,NWHM,NWN,NX,NXC,NXDT,NXE,NXJ,NXN,NXP,NXQ,NXR,NXRT,NXU,NYC,NYCB,NYT,NYV,NZF,O,OACB,OAK,OBE,OC,OCA,OCFT,OCN,ODC,ODV,OEC,OFC,OFG,OG,OGE,OGN,OGS,OHI,OI,OIA,OII,OILD,OILU,OIS,OKE,OLN,OLO,OLP,OMC,OMF,OMI,OMN,ONDK,ONL",
        "ONON,ONTF,ONTO,OOMA,OPA,OPAD,OPFI,OPP,OPY,OR,ORA,ORAN,ORC,ORCL,ORI,ORN,OSB,OSCR,OSG,OSH,OSI,OSK,OSLE,OTIS,OUST,OUT,OVV,OWL,OWLT,OXM,OXY,PACD,PACI,PACK,PAG,PAGS,PAI,PAR,PARR,PAXS,PAY,PAYC,PB,PBA,PBB,PBC,PBF,PBFX,PBH,PBI,PBY,PCF,PCG,PCGU,PCI,PCK,PCM,PCN,PCPC,PCQ,PD,PDI,PDM,PDO,PDOT,PDT,PE,PEAK,PEB,PEG,PEI,PEN,PEO,PER,PES,PFE,PFGC,PFH,PFL,PFN,PFS,PFSI,PG,PGP,PGR,PGRE,PGRU,PGSS,PGTI,PGZ,PH,PHD,PHG,PHI,PHK,PHM,PHR,PHT,PHX,PHYT",
        "PIAI,PIC,PICC,PII,PIM,PINE,PING,PINS,PIPP,PIPR,PIR,PJH,PJT,PK,PKD,PKE,PKG,PKI,PKO,PL,PLAN,PLD,PLNT,PLOW,PLTR,PLYM,PM,PMF,PML,PMM,PMO,PMT,PMTG,PMVC,PMX,PNC,PNF,PNI,PNM,PNR,PNTM,PNW,POND,POR,PORT,POST,PPG,PPL,PPT,PPX,PRA,PRBM,PRE,PRG,PRGO,PRI,PRLB,PRM,PRMI,PRO,PRPB,PRPC,PRS,PRTY,PRU,PSA,PSB,PSFE,PSN,PSPC,PSTG,PSTH,PSTL,PSV,PSX,PSXP,PTA,PTY,PUMP,PV,PVG,PVH,PVT,PVTL,PWR,PWSC,PX,PXD,PYN,PYX,PZC,PZN,QD,QEP,QES,QFIN,QFTA,QGEN,QHC,QNGY",
        "QS,QSR,QTS,QTWO,QUAD,QUOT,QVCD,R,RA,RAAS,RACE,RAD,RAMP,RBA,RBAC,RBC,RBLX,RC,RCA,RCC,RCFA,RCI,RCL,RCP,RCS,RCUS,RDN,RDW,RDY,RE,RERE,RES,REV,REVG,REX,REXR,REZI,RF,RFI,RFL,RFM,RFMZ,RFP,RGA,RGR,RGS,RGT,RH,RHI,RHP,RICE,RIG,RIV,RJAC,RJF,RKLY,RKT,RKTA,RL,RLGY,RLH,RLI,RLJ,RLTY,RLX,RM,RMAX,RMD,RMED,RMI,RMM,RMMZ,RMO,RMT,RNG,RNGR,RNR,ROAN,ROG,ROK,ROL,RONI,ROP,ROT,ROYT,RPAI,RPM,RPT,RQI,RRAC,RRC,RRD,RRTS,RRX,RS,RSF,RSG,RSI,RSKD,RST",
        "RTEC,RTN,RTPZ,RTW,RTX,RVI,RVLV,RVT,RWGE,RWT,RY,RYAM,RYCE,RYI,RYN,RZA,S,SA,SAF,SAFE,SAH,SAIC,SAIL,SAK,SAM,SAND,SAR,SAT,SAVE,SAVN,SB,SBBA,SBG,SBGL,SBH,SBI,SBII,SBNA,SBND,SBOW,SBSW,SC,SCCO,SCD,SCHW,SCI,SCL,SCM,SCRD,SCS,SCU,SCUA,SCVX,SCX,SD,SDHY,SDLP,SDR,SDRL,SDT,SEAH,SEAS,SEDA,SEE,SEM,SEMG,SEMR,SERV,SF,SFE,SFL,SFUN,SGFY,SGHC,SHAK,SHAP,SHEL,SHI,SHLX,SHO,SHOP,SHPW,SHW,SI,SIG,SII,SITC,SITE,SIX,SJI,SJIJ,SJIV,SJM,SJR,SJW,SKE,SKLZ,SKM,SKT,SKX",
        "SKY,SLAC,SLB,SLCA,SLF,SLG,SLQT,SLVM,SM,SMAR,SMG,SMHI,SMLP,SMM,SMP,SMR,SMTA,SMWB,SNA,SNAP,SNDR,SNII,SNOW,SNR,SNV,SNX,SO,SOAC,SOI,SOJA,SOJB,SOJC,SOJD,SOJE,SON,SONX,SOR,SPAQ,SPB,SPCE,SPE,SPFR,SPG,SPGI,SPGS,SPIR,SPN,SPNT,SPNV,SPOT,SPR,SPXC,SPXX,SQ,SQM,SQNS,SQSP,SQZ,SR,SRC,SRE,SREA,SRF,SRG,SRI,SRL,SRT,SRV,SSD,SSFI,SSI,SST,SSTK,SSU,SSW,SSWA,ST,STAG,STC,STE,STEM,STET,STEW,STI,STK,STL,STLA,STM,STN,STNG,STOR,STPC,STRE,STRY,STT,STVN,STWD,STZ,SU,SUAC",
        "SUI,SUM,SUN,SUNL,SUNY,SUP,SWCH,SWI,SWK,SWM,SWN,SWX,SWZ,SXC,SXI,SXT,SXUS,SYF,SYK,SYY,SZC,T,TAC,TACA,TAGG,TALO,TAP,TARO,TBA,TBB,TBC,TBI,TBUX,TCI,TCN,TCO,TCOA,TCS,TD,TDA,TDC,TDCX,TDE,TDF,TDG,TDJ,TDOC,TDS,TDW,TDY,TEAF,TECK,TEI,TEL,TEN,TEX,TFC,TFII,TFSA,TFX,TG,TGE,TGH,TGI,TGNA,TGR,TGS,TGT,THC,THCX,THG,THO,THQ,THR,THS,THW,TIER,TIF,TIMB,TIME,TINV,TISI,TIXT,TJX,TK,TKR,TLGA,TLI,TLRA,TLRD,TLYS,TMAC,TMHC,TMK,TMO,TMST,TMX,TNC,TNET,TNK",
        "TNL,TNP,TOL,TOST,TOTR,TOWR,TPB,TPC,TPGH,TPGS,TPGY,TPH,TPL,TPR,TPTA,TPVG,TPVY,TPX,TPZ,TR,TRAQ,TRC,TRCO,TREC,TREX,TRGP,TRI,TRIS,TRK,TRMR,TRN,TRNO,TROX,TRP,TRQ,TRTN,TRTX,TRU,TRV,TS,TSE,TSI,TSLX,TSM,TSN,TSPQ,TSQ,TSS,TT,TTC,TTI,TTP,TU,TUFN,TUP,TUYA,TV,TWI,TWLO,TWN,TWND,TWNI,TWO,TWOA,TWTR,TXT,TY,TYG,TYL,U,UA,UAA,UAN,UBA,UBER,UBP,UBS,UDR,UE,UFI,UFS,UGI,UGIC,UHS,UHT,UI,UIS,UMH,UNF,UNFI,UNH,UNM,UNMA,UNP,UNT,UNVR,UP,UPH,UPS,URI",
        "USA,USAC,USB,USDP,USER,USFD,USM,USNA,USPH,USX,UTF,UTI,UTL,UTX,UTZ,UVE,UVV,UWMC,UZA,UZC,UZD,UZE,UZF,V,VAC,VAL,VAM,VAPO,VAR,VATE,VBF,VCIF,VCRA,VCV,VCXB,VEC,VEEV,VEI,VEL,VER,VET,VFC,VGAC,VGI,VGII,VGM,VGR,VHC,VHI,VICI,VKQ,VLD,VLN,VLO,VLRS,VLT,VMC,VMI,VMO,VMW,VNCE,VNE,VNO,VNT,VNTR,VOC,VOYA,VPCC,VPG,VPV,VRE,VRS,VRT,VRTV,VSCO,VSH,VSI,VSLR,VSM,VST,VSTO,VTA,VTEX,VTN,VTOL,VTR,VVI,VVNT,VVR,VVV,VYGG,VZ,VZIO,W,WAAS,WAB,WAGE,WAIR,WAL,WALA",
        "WARR,WAT,WBC,WBEV,WBS,WBT,WBX,WCC,WCG,WCN,WD,WDH,WDI,WDR,WE,WEA,WEAV,WEBR,WEC,WEL,WELL,WES,WEX,WF,WFC,WFG,WGO,WH,WHD,WHG,WHR,WIA,WIW,WK,WLH,WLK,WLKP,WLL,WLTH,WLY,WLYB,WM,WMB,WMC,WMK,WMS,WMT,WNC,WNNR,WOR,WOW,WP,WPC,WPCA,WPCB,WPG,WPM,WPX,WQGA,WRAC,WRB,WRBY,WRE,WRI,WRK,WSM,WSO,WSR,WST,WTI,WTM,WTRG,WTRU,WTS,WTTR,WU,WWE,WWW,WY,X,XEC,XFLT,XHR,XL,XOM,XPO,XPOA,XPOF,XPRO,XYL,Y,YALA,YELP,YETI,YEXT,YI,YOU,YQ,YSG,YTPG",
        "YUM,YUMC,ZAYO,ZBH,ZBK,ZEN,ZETA,ZEV,ZF,ZGN,ZH,ZIM,ZME,ZNH,ZTR,ZTS,ZUO,ZVIA,ZWS,ZYME",

        // Stocks in both exchanges
        "ACB,ADCT,ADEX,ADPT,AEP,ALIT,ALR,AMBC,AMCR,AMR,ANAC,ANY,APA,APHA,APSG,ARIS,ATCO,ATHN,AVAN,AVTR,BAND,BFLY,BKR,BLDR,BMEZ,BOMN,BRPM,BV,CBRE,CCEP,CCRD,CGC,CHK,CHX,CLAS,CNDT,CNMD,COUP,CTAC,CTRA,CTRE,DCT,DELL,DYN,EGHT,EVGN,EXC,FACT,FORG,FSLY,FTAI,GBCI,GBLI,GGE,GIG,GOLD,GPOR,GRBK,GRMN,GTLS,GTX,HCP,HEXO,HHS,HIVE,HLIO,HOMB,HON,HST,HTZ,IFIN,IIIN,IMPX,INAQ,INFO,INSP,IPHI,J,KDMN,KDP,KIDS,KNSL,LEAP,LEE,MDH,MGNX,MON,MXL,NBL,NCLH,NGA,NINE,NMFC,NOVA,NSTC,NTST,NWE,OAS,OB,OMP",
        "ORCC,PACE,PAGP,PANA,PANW,PATH,PCB,PCOR,PFLT,PHCC,PNNT,POLY,PRMW,PROS,PRSP,RBOT,RGC,ROSS,RUBI,RYAN,SCPE,SES,SFBS,SG,SKIL,SMRT,SNDA,SSPX,TCF,TGLS,TRCA,TRTL,UAL,VG,VIST,VJET,VLTA,WAVC,WOLF,WORK,XRX,YOGA,YSAC,ZIP"
];

    var collectedData = [];
    var batches = [];
    var endData;
    var calculate;
    var qsParams = new URLSearchParams(window.location.search);

    if ([NaN, 0].includes(Number(qsParams.get("groups")))) {
        endData = data.length;
    }
    else {
        endData = Number(qsParams.get("groups"));
    }

    if (qsParams.get("calculate") === null || Number(qsParams.get("calculate")) === NaN) {
        calculate = 100;
    }
    else {
        calculate = Number(qsParams.get("calculate"));
    }

    for (var i = 0; i < endData; i++) {
        console.log(`Retrieving data for group ${i + 1} of ${endData}...`);
        var symbols = data[i];
        let timeoutEnd = (new Date()).getTime() + 12;
        do {} while ((new Date()).getTime() < timeoutEnd)
        let url = `https://cloud.iexapis.com/stable/stock/market/batch?symbols=${symbols}&types=stats&token=${stocksKey}`;
        const done = await axios.get(url)
            .then(response => {
                let keys = Object.keys(response.data);
                keys.forEach(key => {
                    try {
                        let chartData = response.data[key].stats;
                        collectedData.push({
                            ticker: key,
                            companyName: chartData.companyName
                        });
                    }
                    catch {
                        return;
                    }
                });
            })
            .catch(error => {
                console.log(error);
            });
    }

    drawTable(collectedData);
})();