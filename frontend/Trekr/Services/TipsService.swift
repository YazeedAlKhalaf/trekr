//
//  Tips.swift
//  Trekr
//
//  Created by Yazeed AlKhalaf on 20/07/2021.
//

import Foundation

class TipsService: ObservableObject {
    var tips: [Tip]
    
    init() {
        let url = Bundle.main.url(forResource: "tips", withExtension: "json")!
        let data = try! Data(contentsOf: url)
        tips = try! JSONDecoder().decode([Tip].self, from: data)
    }
}
