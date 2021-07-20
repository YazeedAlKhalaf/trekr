//
//  Tip.swift
//  Trekr
//
//  Created by Yazeed AlKhalaf on 20/07/2021.
//

import Foundation

struct Tip: Decodable {
    let text: String
    let children: [Tip]?
}
