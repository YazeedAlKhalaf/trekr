//
//  Tips.swift
//  Trekr
//
//  Created by Yazeed AlKhalaf on 20/07/2021.
//

import Foundation

class TipsService: ObservableObject {
    @Published var tips: [Tip] = [Tip]()
    @Published var gotData: Bool = false
    
    init() {
        getTips()
    }
    
    private func getTips() {
        guard let url = URL(string: "https://trekr-api.herokuapp.com/tips") else { return }
        
        URLSession.shared.dataTask(with: url) {data, response, error in
            guard let data = data else { return }
            
            let tips = try! JSONDecoder().decode([Tip].self, from: data)
            
            DispatchQueue.main.async {
                self.tips = tips
                self.gotData = true
            }
        }.resume()
    }
}
