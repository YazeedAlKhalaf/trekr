//
//  Locations.swift
//  Trekr
//
//  Created by Yazeed AlKhalaf on 20/07/2021.
//

import Foundation

class LocationsService: ObservableObject {
    @Published var locations: [Location] = [Location]()
    @Published var gotData: Bool = false
    
    var primary: Location {
        locations[0]
    }
    
    init() {
        getLocations()
    }
    
    private func getLocations() {
        guard let url = URL(string: "https://trekr-api.herokuapp.com/discover") else { return }
        
        URLSession.shared.dataTask(with: url) { data, response, error in
            guard let data = data else { return }
            
            let locations = try! JSONDecoder().decode([Location].self, from: data)
            
            DispatchQueue.main.async {
                self.locations = locations
                self.gotData = true
            }
        }.resume()
    }
}
