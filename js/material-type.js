// autor: Luis Sousa

// query de elementos
const category = document.querySelector('#category')
const clear = document.querySelector('.clear')
const search = document.querySelector(".action .btn-primary")
const selectGroup = document.querySelector('.selectGroup')
const subcategory = document.querySelector('#subcategory')
const subSubCategory = document.querySelector('#subsubcategory')

// dicionarios de opções a ser recaregado
const optionsDictionary = {
  carbon: ['Carbon Black', 'Carbon Fiber', 'Diamond', 'Graphite'],
  ceramic: ["Aerogel", "Boride", "Carbide ","Ceramic Matrix Composite","Clay ", "Concrete", "Glass ", "Halide ", "Hydride", "Machinable Ceramic", "Nitride ","Oxide ", "Phosphide/Pnictide","Piezoelectric", "Sulfide/Chalcogenide "
],
  fluid: ['Lubricant ','Quenchant ','Solvent '],
  metal: ['Electronic/Magnetic Alloy ','Ferrous Metal ','Intermetallic','Metal Foam, Mesh, or Honeycomb ','Metal Matrix Composite ', 'Nonferrous Metal '],
  other: ['Additive/Filler for Polymer ', 'Catalyst/Initiator ', 'Ceramic/Metallic Coating ', 'Composite Core Material ', 'Composite Fibers ', 'Semiconductor '
  ],
  polymer: ["Adhesive ", "Film ", "Rapid Prototyping Polymer ", "Renewable/Recycled Polymer ", "Tape ", "Thermoplastic", "Thermoset "
  ],
  pure: ['Pure Elements '],
  wood: ['Hardwood ','Softwood'],
  glass: ["Glass Ceramic", "Glass Fiber", "Optical"
  ],
  oxide: ["Aluminum Oxide","Magnesium Oxide","Silicon Oxide","Titanium Oxide","Zirconium Oxide"],
  termoset: ["Acrylic/Cyanoacrylate Adhesive", "Aramid", "Carbon Fiber/Thermoset Composite", "Composite SMC " ,"Diallyl Phthalate (DAP)","Epoxy ","Filled/Reinforced Thermoset ", "Fluoropolymer, TS", "Melamine", "Methacrylate", "Phenolic", "Polyester, TS", "Polyimide, TS ", "Polymethacrylimide", "Polysulfide Sealant/Adhesive", "Polyurethane, TS", "Rubber or Thermoset Elastomer (TSE)", "Silicone", "Vinyl Ester"  
  ],
  Thermoplastic: ['ABS Polymer ', 'Acetal (Polyoxymethylene, POM)', 'Acrylic (PMMA)', "AES Polymer ","ASA Polymer","Cellulosic ","Cyclo Olefin Polymer","Elastomer, TPE","EMAAA Terpolymer", "Ethylene Acrylic Acid","Ethylene Butyl Acrylate","Ethylene Methyl Acrylate","Ethylene Vinyl Acetate","Ethylene Vinyl Alcohol (EVOH)","Fluoropolymer","Ionomer","Liquid Crystal Polymer (LCP)","Nylon (Polyamide PA)","Polyamide-imide (PAI)","Polyarylamide (PAA)" ,"Polyarylsulfone (PAS)","Polybenzimidazole (PBI)","Polybutene","Polycarbonate (PC)","Polyester, TP","Polyether Block Amide (PEBA)","Polyetherimide (PEI)","Polyethersulfone (PES)","Polyethylene (PE) ","Polyimide, Thermoplastic","Polyketone" ,"Polylactic Acid (PLA) Biopolymer " ,"Polymethylpentene (PMP)" ,"Polyolefin","Polyphenylene Ether/PPO " ,"Polyphenylene Sulfide (PPS)" ,"Polyphenylsulfone (PPSU)","Polyphthalamide (PPA)","Polyphthalate Carbonate","Polypropylene (PP)","Polystyrene (PS)","Polysulfone (PSU)","Polyurethane, TP","Polyvinyl Dichloride (PVDC)" ,"SAN Polymer","Silicone, Thermoplastic " ,"Siloxane","SMA Polymer ","Styrene-Butadiene","TPO","Vinyl (PVC)"  
  ],
  NonferrousMetal: [	"Aluminum Alloy ","Beryllium Alloy" ,"Bismuth Alloy"  ,"Cobalt Alloy","Copper Alloy","Indium Alloy " ,"Lead Alloy"  ,"Magnesium Alloy"  ,"Molybdenum Alloy"  ,"Nickel Alloy"  ,"Niobium Alloy"  ,"Precious Metal " ,"Refractory Metal"  ,"Solder/Braze Alloy"  ,"Tin Alloy " ,"Titanium Alloy"  ,"Tungsten Alloy " ,"Zinc Alloy ","Zirconium Alloy " 
  ],
  FerrousMetal: ["Alloy Steel","ASTM Steel"  ,"Carbon Steel"  ,"Cast Iron"  ,"Chrome-moly Steel " ,"Duplex"  ,"Maraging Steel " ,"Pressure Vessel Steel " ,"Special-Purpose Steel " ,"Stainless Steel  ","Tool Steel"  
  ],
  Lubricant: ["Alkylated Naphthalene (AN)","Aluminum Gellant"  ,"Calcium Gellant ","Clay Gellant"  ,"Fluoropolymer Base"  ,"Lithium Gellant " ,"Multiply-Alkylated Cyclopentane (MAC) " ,"Organic Soap Gellant " ,"Perfluoropolyether (PFPE) " ,"Polyalphaolefin (PAO) " ,"Polyglycol"  ,"Polyphenylether (PPE) Base " ,"PTFE Gellant"  ,"Silica Gellant"  ,"Silicone Base"  ,"Synthetic Ether Base " ,"Urea Gellant"  ,"White Mineral Oil (WMO) " ,"Zinc Oxide Gellant"  
  ]

}

// função que carrega as opções da segunda caixa de pesquisa
const loadNewSelect = () =>
{ 
  search.disabled = true
  subcategory.disabled = true
  subcategory.innerHTML = `<option selected hidden disabled>Select one Subcategory</option>`  
    let select = category.options[category.selectedIndex].value

    var options =  optionsDictionary[select]

    options.forEach(element => {
        subcategory.innerHTML += `<option value='${element.split(' ')[0]}${element.split(' ')[1]}'>${element}</option>`
    });

    subcategory.disabled = false
    search.disabled = false;
}

// função que carrega as opções da terceira caixa de pesquisa
const addSubSubCategory = () => {
  let select = subcategory.options[subcategory.selectedIndex].value

  subSubCategory.disabled = true
  subSubCategory.hidden = true;

  if(optionsDictionary[select]){
  var options =  optionsDictionary[select]

  subSubCategory.disabled = false
  subSubCategory.hidden = false;

  subSubCategory.innerHTML = `<option selected hidden disabled>Select one Subcategory</option>`

  options.forEach(element => {
    subSubCategory.innerHTML += `<option value='${element.split(' ')[0]}${element.split(' ')[1]}'>${element}</>`
  });
}
  
}

// função para limpar os inputs
const clearInputs = () => {
  category.options[0].selected = true;
  subcategory.disabled = true;
  subcategory.innerHTML = `<option selected hidden disabled>Select one Subcategory</option>` 
  search.disabled = true;
}


// adicionando observadores de eventos 
category.addEventListener('change', loadNewSelect)
subcategory.addEventListener('change', addSubSubCategory)
clear.addEventListener('click', clearInputs);