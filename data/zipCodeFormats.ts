export interface ZipCodeFormats {
    [key: string]: RegExp;
}

export const zipCodeFormats: ZipCodeFormats = {
    Afghanistan: /^\d{4}$/, // Example format for Afghanistan
    Albania: /^\d{4}$/, // Example format for Albania
    Algeria: /^\d{5}$/, // Example format for Algeria
    Andorra: /^AD\d{3}$/, // Example format for Andorra (AD followed by three digits)
    Angola: /^\d{4}$/, // Example format for Angola
    AntiguaAndBarbuda: /^$/, // Example format for Antigua and Barbuda (customize as per actual format)
    Argentina: /^\d{4}$/, // Example format for Argentina
    Armenia: /^(\d{4})?$/, // Example format for Armenia (optional four digits)
    Australia: /^\d{4}$/, // Example format for Australia
    Austria: /^\d{4}$/, // Example format for Austria
    Azerbaijan: /^\d{4}$/, // Example format for Azerbaijan
    Bahamas: /^$/, // Example format for the Bahamas (customize as per actual format)
    Bahrain: /^\d{3,4}$/, // Example format for Bahrain (3 or 4 digits)
    Bangladesh: /^\d{4}$/, // Example format for Bangladesh
    Barbados: /^$/, // Example format for Barbados (customize as per actual format)
    Belarus: /^\d{6}$/, // Example format for Belarus
    Belgium: /^\d{4}$/, // Example format for Belgium
    Belize: /^\d{4}$/, // Example format for Belize
    Benin: /^\d{4}$/, // Example format for Benin
    Bhutan: /^\d{5}$/, // Example format for Bhutan
    Bolivia: /^\d{4}$/, // Example format for Bolivia
    BosniaAndHerzegovina: /^\d{5}$/, // Example format for Bosnia and Herzegovina
    Botswana: /^\d{5}$/, // Example format for Botswana
    Brazil: /^\d{5}-\d{3}$/, // Example format for Brazil (xxxxx-xxx)
    Brunei: /^[A-Z]{2}[ ]?\d{4}$/, // Example format for Brunei (two uppercase letters followed by optional space and four digits)
    Bulgaria: /^\d{4}$/, // Example format for Bulgaria
    BurkinaFaso: /^\d{5}$/, // Example format for Burkina Faso
    Burundi: /^$/, // Example format for Burundi (customize as per actual format)
    Cambodia: /^\d{5}$/, // Example format for Cambodia
    Cameroon: /^\d{5}$/, // Example format for Cameroon
    Canada: /^[ABCEGHJKLMNPRSTVXY]\d[A-Z] \d[A-Z]\d$/, // Example format for Canada (A1A 1A1)
    CapeVerde: /^$/, // Example format for Cape Verde (customize as per actual format)
    CentralAfricanRepublic: /^$/, // Example format for Central African Republic (customize as per actual format)
    Chad: /^$/, // Example format for Chad (customize as per actual format)
    Chile: /^\d{7}-\d{1}$/, // Example format for Chile (xxxxxxx-x)
    China: /^\d{6}$/, // Example format for China
    Colombia: /^\d{6}$/, // Example format for Colombia
    Comoros: /^$/, // Example format for Comoros (customize as per actual format)
    Congo: /^$/, // Example format for Congo (customize as per actual format)
    CostaRica: /^\d{4,5}$/, // Example format for Costa Rica (4 or 5 digits)
    Croatia: /^\d{5}$/, // Example format for Croatia
    Cuba: /^$/, // Example format for Cuba (customize as per actual format)
    Cyprus: /^\d{4}$/, // Example format for Cyprus
    CzechRepublic: /^\d{3} \d{2}$/, // Example format for Czech Republic (xxx xx)
    Denmark: /^\d{4}$/, // Example format for Denmark
    Djibouti: /^$/, // Example format for Djibouti (customize as per actual format)
    Dominica: /^$/, // Example format for Dominica (customize as per actual format)
    DominicanRepublic: /^\d{5}$/, // Example format for Dominican Republic
    EastTimor: /^$/, // Example format for East Timor (customize as per actual format)
    Ecuador: /^\d{6}$/, // Example format for Ecuador
    Egypt: /^\d{5}$/, // Example format for Egypt
    ElSalvador: /^\d{4}$/, // Example format for El Salvador
    EquatorialGuinea: /^$/, // Example format for Equatorial Guinea (customize as per actual format)
    Eritrea: /^$/, // Example format for Eritrea (customize as per actual format)
    Estonia: /^\d{5}$/, // Example format for Estonia
    Ethiopia: /^\d{4}$/, // Example format for Ethiopia
    Fiji: /^$/, // Example format for Fiji (customize as per actual format)
    Finland: /^\d{5}$/, // Example format for Finland
    France: /^\d{5}$/, // Example format for France
    Gabon: /^$/, // Example format for Gabon (customize as per actual format)
    Gambia: /^$/, // Example format for Gambia (customize as per actual format)
    Georgia: /^\d{4}$/, // Example format for Georgia
    Germany: /^\d{5}$/, // Example format for Germany
    Ghana: /^$/, // Example format for Ghana (customize as per actual format)
    Greece: /^\d{5}$/, // Example format for Greece
    Grenada: /^$/, // Example format for Grenada (customize as per actual format)
    Guatemala: /^\d{5}$/, // Example format for Guatemala
    Guinea: /^$/, // Example format for Guinea (customize as per actual format)
    GuineaBissau: /^$/, // Example format for Guinea-Bissau (customize as per actual format)
    Guyana: /^$/, // Example format for Guyana (customize as per actual format)
    Haiti: /^\d{4}$/, // Example format for Haiti
    Honduras: /^\d{5}$/, // Example format for Honduras
    Hungary: /^\d{4}$/, // Example format for Hungary
    Iceland: /^\d{3}$/, // Example format for Iceland
    India: /^\d{6}$/, // Example format for India
    Indonesia: /^\d{5}$/, // Example format for Indonesia
    Iran: /^\d{10}$/, // Example format for Iran
    Iraq: /^\d{5}$/, // Example format for Iraq
    Ireland: /^[A-Z]\d{2} [A-Z]{4}$/, // Example format for Ireland (A65 F4E2)
    Israel: /^\d{5}$/, // Example format for Israel
    Italy: /^\d{5}$/, // Example format for Italy
    IvoryCoast: /^$/, // Example format for Ivory Coast (customize as per actual format)
    Jamaica: /^\d{2}$/, // Example format for Jamaica
    Japan: /^\d{3}-\d{4}$/, // Example format for Japan (xxx-xxxx)
    Jordan: /^\d{5}$/, // Example format for Jordan
    Kazakhstan: /^\d{6}$/, // Example format for Kazakhstan
    Kenya: /^\d{5}$/, // Example format for Kenya
    Kiribati: /^$/, // Example format for Kiribati (customize as per actual format)
    KoreaNorth: /^$/, // Example format for Korea North (customize as per actual format)
    KoreaSouth: /^\d{5}$/, // Example format for Korea South
    Kosovo: /^\d{5}$/, // Example format for Kosovo
    Kuwait: /^\d{5}$/, // Example format for Kuwait
    Kyrgyzstan: /^\d{6}$/, // Example format for Kyrgyzstan
    Laos: /^\d{5}$/, // Example format for Laos
    Latvia: /^LV-\d{4}$/, // Example format for Latvia (LV-xxxx)
    Lebanon: /^\d{4} \d{4}$/, // Example format for Lebanon (xxxx yyyy)
    Lesotho: /^$/, // Example format for Lesotho (customize as per actual format)
    Liberia: /^\d{4}$/, // Example format for Liberia
    Libya: /^\d{5}$/, // Example format for Libya
    Liechtenstein: /^(948[5-9])|(949\d)$/, // Example format for Liechtenstein
    Lithuania: /^LT-\d{5}$/, // Example format for Lithuania (LT-xxxxx)
    Luxembourg: /^\d{4}$/, // Example format for Luxembourg
    Macedonia: /^\d{4}$/, // Example format for Macedonia
    Madagascar: /^\d{3}$/, // Example format for Madagascar
    Malawi: /^\d{5}$/, // Example format for Malawi
    Malaysia: /^\d{5}$/, // Example format for Malaysia
    Maldives: /^\d{5}$/, // Example format for Maldives
    Mali: /^\d{5}$/, // Example format for Mali
    Malta: /^[A-Z]{3} \d{2,4}$/, // Example format for Malta (AAA 999 or AAA 9999)
    MarshallIslands: /^$/, // Example format for Marshall Islands (customize as per actual format)
    Mauritania: /^$/, // Example format for Mauritania (customize as per actual format)
    Mauritius: /^\d{5}$/, // Example format for Mauritius
    Mexico: /^\d{5}$/, // Example format for Mexico
    Micronesia: /^$/, // Example format for Micronesia (customize as per actual format)
    Moldova: /^\d{4}$/, // Example format for Moldova
    Monaco: /^980\d{2}$/, // Example format for Monaco (980xx)
    Mongolia: /^\d{6}$/, // Example format for Mongolia
    Montenegro: /^\d{5}$/, // Example format for Montenegro
    Morocco: /^\d{5}$/, // Example format for Morocco
    Mozambique: /^\d{4}$/, // Example format for Mozambique
    Myanmar: /^\d{5}$/, // Example format for Myanmar
    Namibia: /^\d{5}$/, // Example format for Namibia
    Nauru: /^$/, // Example format for Nauru (customize as per actual format)
    Nepal: /^\d{5}$/, // Example format for Nepal
    Netherlands: /^\d{4} [A-Z]{2}$/, // Example format for the Netherlands (xxxx AA)
    NewZealand: /^\d{4}$/, // Example format for New Zealand
    Nicaragua: /^$/, // Example format for Nicaragua (customize as per actual format)
    Niger: /^$/, // Example format for Niger (customize as per actual format)
    Nigeria: /^\d{6}$/, // Example format for Nigeria
    Norway: /^\d{4}$/, // Example format for Norway
    Oman: /^\d{3}$/, // Example format for Oman
    Pakistan: /^\d{5}$/, // Example format for Pakistan
    Palau: /^$/, // Example format for Palau (customize as per actual format)
    Panama: /^\d{6}$/, // Example format for Panama
    PapuaNewGuinea: /^$/, // Example format for Papua New Guinea (customize as per actual format)
    Paraguay: /^\d{4}$/, // Example format for Paraguay
    Peru: /^\d{5}$/, // Example format for Peru
    Philippines: /^\d{4}$/, // Example format for Philippines
    Poland: /^\d{2}-\d{3}$/, // Example format for Poland (xx-xxx)
    Portugal: /^\d{4}-\d{3}$/, // Example format for Portugal (xxxx-xxx)
    Qatar: /^\d{4}$/, // Example format for Qatar
    Romania: /^\d{6}$/, // Example format for Romania
    RussianFederation: /^\d{6}$/, // Example format for Russian Federation
    Rwanda: /^$/, // Example format for Rwanda (customize as per actual format)
    SaintKittsAndNevis: /^$/, // Example format for Saint Kitts and Nevis (customize as per actual format)
    SaintLucia: /^$/, // Example format for Saint Lucia (customize as per actual format)
    SaintVincentAndTheGrenadines: /^$/, // Example format for Saint Vincent and the Grenadines (customize as per actual format)
    Samoa: /^$/, // Example format for Samoa (customize as per actual format)
    SanMarino: /^4789\d$/, // Example format for San Marino (47890)
    SaoTomeAndPrincipe: /^$/, // Example format for Sao Tome and Principe (customize as per actual format)
    SaudiArabia: /^\d{5}$/, // Example format for Saudi Arabia
    Senegal: /^\d{5}$/, // Example format for Senegal
    Serbia: /^\d{5}$/, // Example format for Serbia
    Seychelles: /^$/, // Example format for Seychelles (customize as per actual format)
    SierraLeone: /^$/, // Example format for Sierra Leone (customize as per actual format)
    Singapore: /^\d{6}$/, // Example format for Singapore
    Slovakia: /^\d{5} \d{2}$/, // Example format for Slovakia (xxxxx xx)
    Slovenia: /^\d{4}$/, // Example format for Slovenia
    SolomonIslands: /^$/, // Example format for the Solomon Islands (customize as per actual format)
    Somalia: /^$/, // Example format for Somalia (customize as per actual format)
    SouthAfrica: /^\d{4}$/, // Example format for South Africa
    SouthSudan: /^\d{5}$/, // Example format for South Sudan
    Spain: /^\d{5}$/, // Example format for Spain
    SriLanka: /^\d{5}$/, // Example format for Sri Lanka
    Sudan: /^$/, // Example format for Sudan (customize as per actual format)
    Suriname: /^$/, // Example format for Suriname (customize as per actual format)
    Swaziland: /^$/, // Example format for Swaziland (customize as per actual format)
    Sweden: /^\d{5}$/, // Example format for Sweden
    Switzerland: /^\d{4}$/, // Example format for Switzerland
    Syria: /^\d{6}$/, // Example format for Syria
    Taiwan: /^\d{5}$/, // Example format for Taiwan
    Tajikistan: /^\d{6}$/, // Example format for Tajikistan
    Tanzania: /^\d{5}$/, // Example format for Tanzania
    Thailand: /^\d{5}$/, // Example format for Thailand
    Togo: /^\d{2}$/, // Example format for Togo
    Tonga: /^$/, // Example format for Tonga (customize as per actual format)
    TrinidadAndTobago: /^\d{6}$/, // Example format for Trinidad and Tobago
    Tunisia: /^\d{4}$/, // Example format for Tunisia
    Turkey: /^\d{5}$/, // Example format for Turkey
    Turkmenistan: /^\d{6}$/, // Example format for Turkmenistan
    Tuvalu: /^$/, // Example format for Tuvalu (customize as per actual format)
    Uganda: /^\d{5}$/, // Example format for Uganda
    Ukraine: /^\d{5}$/, // Example format for Ukraine
    UnitedArabEmirates: /^$/, // Example format for the United Arab Emirates (customize as per actual format)
    UnitedKingdom: /^[A-Z]\d[A-Z] \d[A-Z]{2}$/, // Example format for the United Kingdom (A1A 1AA)
    UnitedStates: /^\d{5}(?:-\d{4})?$/, // Example format for United States (xxxxx or xxxxx-xxxx)
    Uruguay: /^\d{5}$/, // Example format for Uruguay
    Uzbekistan: /^\d{6}$/, // Example format for Uzbekistan
    Vanuatu: /^$/, // Example format for Vanuatu (customize as per actual format)
    VaticanCity: /^$/, // Example format for Vatican City (customize as per actual format)
    Venezuela: /^\d{4}$/, // Example format for Venezuela
    Vietnam: /^\d{6}$/, // Example format for Vietnam
    Yemen: /^\d{5}$/, // Example format for Yemen
    Zambia: /^\d{5}$/, // Example format for Zambia
    Zimbabwe: /^\d{4}$/, // Example format for Zimbabwe
};
