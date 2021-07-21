//
//  Location.swift
//  Trekr
//
//  Created by Yazeed AlKhalaf on 20/07/2021.
//

import Foundation

struct Location : Decodable, Identifiable {
    let id: String
    let name: String
    let country: String
    let countryFlag: String
    let description: String
    let more: String
    let latitude: Double
    let longitude: Double
    let heroPicture: String
}
